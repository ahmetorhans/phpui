var path = require("path")
var fs = require('fs');
var spawn = require('child_process').spawn;

//mevcut dir..
//dirname = path.resolve(path.dirname());
var dirname = path.dirname(process.execPath);


var config = require('./config.json');


//php
var phpBin=dirname+('\\bin\\php\\php.exe');
var wwwDir=dirname+('\\src');

var wwwPort = config.wwwPort;
var mysqlPort = config.mysqlPort;

var portscanner = require('portscanner')


portscanner.checkPortStatus(mysqlPort, '127.0.0.1', function(error, status) {
  if (status=='closed'){
		var mysqlDataDir=dirname.replace(/\\/g, "/")+('/bin/mysql/data/');
		var mysqlBin=dirname+('\\bin\\mysql\\bin\\mysqld.exe');
		mysql    = spawn(mysqlBin,["--datadir",mysqlDataDir,"--port",mysqlPort]);
		console.log("Started Mysql");
	}
})


portscanner.checkPortStatus(wwwPort, '0.0.0.0', function(error, status) {
  if (status=='closed'){
	php    = spawn(phpBin,["-S","0.0.0.0:"+wwwPort,"-t",wwwDir]);
	console.log("Started Php")
	}
}) 
 
setTimeout(function(){
   // window.location.href = 'http://'+wwwServer+':'+wwwPort+'/';
}, 1000);




