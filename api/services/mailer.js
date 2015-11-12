'use strict';
const _ = require('lodash');
const randtoken = require('rand-token');
const nodemailer = require('nodemailer');

class Nev{
  constructor(mongoose){
    this.mongoose = mongoose;
    this.options = {
      verificationURL: 'http://example.com',
      URLLength: 48,
      persistentUserModel: null,
      tempUserModel: null,
      tempUserCollection: 'temporary_users',
      emailFieldName: 'email',
      URLFieldName: 'GENERATED_VERIFYING_URL',
      expirationTime: 86400,
      transportOptions: {
        service: 'Gmail',
        auth: {
          user: 'user@gmail.com',
          pass: 'password'
        }
      },
      verifyMailOptions: {
        from: 'Do Not Reply <user@gmail.com>',
        subject: 'Confirm your account',
        html: _.template('<p>Please verify your account by clicking <a href="${data.url}">this link</a>. If you are unable to do so, copy and ' +
          'paste the following link into your browser:</p><p>${data.url}</p>',{variable: 'data'}),
        text: _.template('Please verify your account by clicking the following link, or by copying and pasting it into your browser: ${data.url}',{variable: 'data'})
      },
      shouldSendConfirmation: true,
      confirmMailOptions: {
        from: 'Do Not Reply <user@gmail.com>',
        subject: 'Successfully verified!',
        html: _.template('<p>Your account has been successfully verified.</p>'),
        text: _.template('Your account has been successfully verified.')
      }
    };
    this.transporter = nodemailer.createTransport(this.options.transportOptions);
  }
  configure(obj){
    _.extend(this.options,obj);
    this.transporter = nodemailer.createTransport(this.options.transportOptions);
  }
  generateTempUserModel(model){
    this.options.persistentUserModel = model;
    const schema = model.schema;
    const field1 = {};
    field1[this.options.URLFieldName] = String;
    schema.add(field1);
    schema.add({
      'createdAt': {
        type: Date,
        expires: this.options.expirationTime.toString() + 's',
        default: Date.now
      }
    });
    this.options.tempUserModel = this.mongoose.model(this.options.tempUserCollection, schema);
    return this.options.tempUserModel;
  }
  createTempUser(user){
    if(!this.options.tempUserModel){
      throw new TypeError('Temporary user model not defined. Either you forgot to generate one or you did not predefine one.');
    }
    const query = {};
    query[this.options.emailFieldName] = user[this.options.emailFieldName];
    return this.options.tempUserModel.findOne(query).lean().exec()
    .then((tempUser) => {
      if(tempUser){
        return null;
      }
      const tempUserData = user._doc;
      tempUserData[this.options.URLFieldName] = randtoken.generate(this.options.URLLength);
      const newTempUser = new this.options.tempUserModel(tempUserData);
      return newTempUser;
    });
  }
  sendVerificationEmail(email, url){
    const absoluteUrl = `${this.options.verificationURL}/register/verify/${url}`;
    const mailOptions = _.clone(this.options.verifyMailOptions);
    mailOptions.to = email;
    mailOptions.html = mailOptions.html({url: absoluteUrl});
    mailOptions.text = mailOptions.text({url: absoluteUrl});
    return this.transporter.sendMail(mailOptions);
  }
  sendConfirmationEmail(email){
    const mailOptions = _.clone(this.options.confirmMailOptions);
    mailOptions.to = email;
    return this.transporter.sendMail(mailOptions);
  }
  registerTempUser(newTempUser){
    console.log(newTempUser.isModified('password'));
    return newTempUser.save()
    .then(
      (tempUser) => {
        return this.sendVerificationEmail(tempUser[this.options.emailFieldName], tempUser[this.options.URLFieldName])
        .then((info) => {
          return tempUser;
        });
      }
    );
  }
  confirmTempUser(url){
    const TempUser = this.options.tempUserModel;
    const query = {};
    query[this.options.URLFieldName] = url;
    return TempUser.findOne(query, '+password').lean().exec()
    .then((tempUserData) => {
      if(!tempUserData){return;}
      const userData = tempUserData;
      delete userData[this.options.URLFieldName];
      delete userData.createdAt;
      const User = this.options.persistentUserModel;
      const user = new User(userData);
      return user.save()
      .then(() => {
        return TempUser.remove(query);
      })
      .then(() => {
        if(this.options.shouldSendConfirmation){
          return this.sendConfirmationEmail(user[this.options.emailFieldName]);
        }
        return true;
      })
      .then(() => {
        return user;
      });
    },(e) => {
      console.log(e);
      throw e;
    });
  }
  resendVerificationEmail(email){
    const query = {};
    query[this.options.emailFieldName] = email;
    return this.options.tempUserModel.findOne(query).exec()
    .then((tempUser) => {
      if(!tempUser){return;}
      return this.sendVerificationEmail(tempUser[this.options.emailFieldName], tempUser[this.options.URLFieldName]);
    });
  }
}

module.exports = Nev;