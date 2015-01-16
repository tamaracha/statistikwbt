module.exports=function($state,identity){
  this.registerData={};
  this.subjects=[{
    name: "psychology",
    label: "Psychologie",
    group: "Sozial- und Wirtschaftswissenschaften"
  },{
    name: "education",
    label: "Lehramt",
    group: "Erziehungswissenschaften"
  },{
    name: "physics",
    label: "Physik",
    group: "Naturwissenschaften"
  },{
    name: "philosophy",
    label: "Philosophie",
    group: "Geisteswissenschaften"
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
    .then(function(){
      return $state.go("content");
    })
    .catch(identity.inauthenticate);
  };
};