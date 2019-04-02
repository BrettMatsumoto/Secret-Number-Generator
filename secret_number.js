'use strict';
module.exports = function() {
  const secretNumber = Math.random()*1000000;
  return function(){
    return secretNumber;
  };
};
