var ErrorFactory=function(name,status){
  var err=new Error(name);
  err.status=status;
  return function(msg){
    err.message=msg;
    return err;
  };
};

exports.noContent=new ErrorFactory("no content",204);
exports.badRequest=new ErrorFactory("bad request",400);
exports.unauthorized=new ErrorFactory("unauthorized",401);
exports.forbidden=new ErrorFactory("forbidden",403);
exports.notFound=new ErrorFactory("not found",404);
exports.serverError=new ErrorFactory("internal error",500);

exports.onError=function(e){
  console.error(e);
  res.sendStatus(e.status||500);
};