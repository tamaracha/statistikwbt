'use strict';
const mailer=require('nodemailer');
const mailConfig=require('config').get('email');
const transport=mailConfig ? mailer.createTransport(mailConfig) : mailer.createTransport();
module.exports=transport;
