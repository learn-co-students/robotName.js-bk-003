'use strict';

function Robot(){
	this.name = String.fromCharCode(Math.floor((Math.random() * (90 - 65) + 65)))+
	String.fromCharCode(Math.floor((Math.random() * (90 - 65) + 65)))+
	Math.floor((Math.random() * 9)).toString() +
	Math.floor((Math.random() * 9)).toString() +
	Math.floor((Math.random() * 9)).toString() ;
};

Robot.prototype.reset = function() {
	this.name = String.fromCharCode(Math.floor((Math.random() * (90 - 65) + 65)))+
	String.fromCharCode(Math.floor((Math.random() * (90 - 65) + 65)))+
	Math.floor((Math.random() * 9)).toString() +
	Math.floor((Math.random() * 9)).toString() +
	Math.floor((Math.random() * 9)).toString() ;
};
