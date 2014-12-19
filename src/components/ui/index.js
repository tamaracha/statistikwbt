module.exports=require("angular").module("ui",["ui.router"])
.filter("unitStatus",require("./unit-status-filter.js"))
.filter("title",require("./title-filter.js"))
.filter("titleCase",require("./title-case-filter"))
.name;