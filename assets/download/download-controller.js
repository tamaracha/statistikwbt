module.exports=/*@ngInject*/function(Restangular){
	var self=this;
	this.format="rtf";
	this.submit=function(){
		Restangular.all("docs").one(self.format)
		.withHttpConfig({
			responseType: "blob"
		}).get()
		.then(function(response){
			saveAs(response,"Statistiktest.rtf");
		});
	};
};