module.exports=function(identity){
  this.registerData={};
  this.subjects=[{
    name: "psychology",
    label: "Psychologie",
    group: "Sozialwissenschaften"
  },{
    name: "education",
    label: "Erziehungswissenschaften",
    group: "Lehramt"
  },{
    name: "theology",
    label: "Theologie",
    group: "Geisteswissenschaften"
  },{
    name: "physics",
    label: "Physik",
    group: "Naturwissenschaften"
  }];
  this.register=function(form){
    return identity.create(form)
    .then(function(){
      return {
        email: form.email,
        password: form.password
      };
    })
    .then(identity.authenticate)
    .catch(identity.inauthenticate);
  };
};