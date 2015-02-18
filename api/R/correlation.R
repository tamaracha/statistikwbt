library("jsonlite")
library("ecodist")

correlation<-function(json){
	options<-fromJSON(json)
	r<-as.numeric(options[["r"]])
	len<-as.numeric(options[["len"]])
	data<-data.frame(corgen(r=r,x=rnorm(len),epsilon=0.01))
	return(as.character(toJSON(data)))
}