var noContent=exports.noCentent=new Error("no content");
noContent.status=204;

var badRequest=exports.badRequest=new Error("bad request");
badRequest.status=400;

var unauthorized=exports.unauthorized=new Error("unauthorized");
unauthorized.status=401;

var notFound=exports.notFound=new Error("not found");
notFound.status=404;

