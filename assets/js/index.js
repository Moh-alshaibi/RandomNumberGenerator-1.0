'use strict';

let x;
let y;
document.getElementById("createNumber").onclick = function(){
    x = Math.floor(Math.random()* 1000001)
    document.getElementById("rNumber").innerHTML = x;
}
document.getElementById("numberZero").onclick = function(){
    y = 0
    document.getElementById("rNumber").innerHTML = y;
}
