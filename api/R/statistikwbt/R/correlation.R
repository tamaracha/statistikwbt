#' Ein Zufallsgenerator für korrelierte Variablen
#'
#' Diese Funktion generiert Zufallsvariablen mit gegebener Pearson-Korrelation und Länge, sowie die extrapolierten Extrempunkte für eine Regressionsgerade.
#' @param json ein JSON-Objekt mit den Eigenschaften „len“ (die Stichprobengröße, Standardwert ist 30) und „r“ (gewünschte Korrelation, Standardwert ist 0).
#' @return Ein JSON-Objekt mit den Eigenschaften „table“ und „regression“. Data enthält die Arrays „x“ und „y“, Regression ist ein Objekt mit den Zahlen „x“ und „y“.
#' @export
correlation<-function(json){
	if(exists("json")){
		options<-jsonlite::fromJSON(json)
		if(class(options[["r"]])!="NULL"){r<-as.numeric(options[["r"]])}
		if(class(options[["len"]])!="NULL"){len<-as.numeric(options[["len"]])}
	}
	if(!exists("r")){r<-0.0}
	if(!exists("len")){len<-30}
	print(r)
	print(len)
	data<-data.frame(ecodist::corgen(r=r,x=rnorm(len),epsilon=0.01))
	return(as.character(jsonlite::toJSON(data)))
}