'use strict';
// class name = rNumber
// id name = createNumber
    // let randomNumber = Math.floor(Math.random()* 1000001)

let x;


document.getElementById("createNumber").onclick = function(){
    x = Math.floor(Math.random()* 1000001)
    document.getElementById("rNumber").innerHTML = x;
}