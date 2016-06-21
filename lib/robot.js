'use strict';

function Robot(){
   
   function num(){
     let string = ""
   	 for(let i = 0; i < 3; ++i){
      string += Math.floor(Math.random() * 10);
     } 
     return string;
   }

  this.name = this.name || ("RA" + num());
};

// code your solution in this file

Robot.prototype.reset = function() {
  this.name = false;
};