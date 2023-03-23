// var clicks = 0;

// function onClick() {
//   clicks += 1;
//   document.getElementById("clicks").innerHTML = clicks;
// };

var lastTap = 0;
document.addEventListener('touchend', function(event) {
    var currentTime = new Date().getTime();
    var tapLength = currentTime - lastTap;
    if (tapLength < 500 && tapLength > 0) {
        event.preventDefault();
    }
    lastTap = currentTime;
});

var counter = 0;

var add1 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value1').innerHTML);
  a += valueToAdd;
  document.getElementById('Value1').innerHTML = a;
}

function reset1(){
  document.getElementById('Value1').innerHTML=0;  
  }

var counter = 0;
var add2 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value2').innerHTML);
  a += valueToAdd;
  document.getElementById('Value2').innerHTML = a;
}

function reset2(){
  document.getElementById('Value2').innerHTML=0;  
  }

var counter = 0;
var add3 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value3').innerHTML);
  a += valueToAdd;
  document.getElementById('Value3').innerHTML = a;
}

function reset3(){
  document.getElementById('Value3').innerHTML=0;  
  }

var counter = 0;
var add4 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value4').innerHTML);
  a += valueToAdd;
  document.getElementById('Value4').innerHTML = a;
}

function reset4(){
  document.getElementById('Value4').innerHTML=0;  
  }

var counter = 0;
var add5 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value5').innerHTML);
  a += valueToAdd;
  document.getElementById('Value5').innerHTML = a;
}

function reset5(){
  document.getElementById('Value5').innerHTML=0;  
  }

var counter = 0;
var add6 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value6').innerHTML);
  a += valueToAdd;
  document.getElementById('Value6').innerHTML = a;
}

function reset6(){
  document.getElementById('Value6').innerHTML=0;  
  }

var counter = 0;
var add7 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value7').innerHTML);
  a += valueToAdd;
  document.getElementById('Value7').innerHTML = a;
}

function reset7(){
  document.getElementById('Value7').innerHTML=0;  
  }

var counter = 0;
var add8 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value8').innerHTML);
  a += valueToAdd;
  document.getElementById('Value8').innerHTML = a;
}

function reset8(){
  document.getElementById('Value8').innerHTML=0;  
  }

var counter = 0;
var add9 = function(valueToAdd){
  var a = parseInt(document.getElementById('Value9').innerHTML);
  a += valueToAdd;
  document.getElementById('Value9').innerHTML = a;
}

function reset9(){
  document.getElementById('Value9').innerHTML=0;  
  }
