(function() {
  'use strict';

// S T O P
var stopButton = document.getElementById('stopButton');
var stopLight = document.getElementById('stopLight');
var stopBulb = "";
stopButton.addEventListener('click', function(){
  stopLight.style.backgroundColor = (stopLight.style.backgroundColor == 'red') ? 'black' : 'red';
},false);
stopButton.addEventListener('click', function(){
  console.log(stopBulb = (stopBulb == 'Stop light bulb on') ? 'Stop light bulb off' : 'Stop light bulb on');
},false);

stopButton.addEventListener('mouseenter', function(){
  console.log("Entered stop buton");
});
stopButton.addEventListener('mouseleave', function(){
  console.log("Left stop buton");
});

// S L O W
var slowButton = document.getElementById('slowButton');
var slowLight = document.getElementById('slowLight');
var slowBulb = "";
slowButton.addEventListener('click', function(){
  slowLight.style.backgroundColor = (slowLight.style.backgroundColor == 'orange') ? 'black' : 'orange';
},false);
slowButton.addEventListener('click', function(){
  console.log(slowBulb = (slowBulb == 'Slow light bulb on') ? 'Slow light bulb off' : 'Slow light bulb on');
},false);

slowButton.addEventListener('mouseenter', function(){
  console.log("Entered slow buton");
});
slowButton.addEventListener('mouseleave', function(){
  console.log("Left slow buton");
});

// G O
var goButton = document.getElementById('goButton');
var goLight = document.getElementById('goLight');
var goBulb = "";
goButton.addEventListener('click', function(){
  goLight.style.backgroundColor = (goLight.style.backgroundColor == 'green') ? 'black' : 'green';
},false);
goButton.addEventListener('click', function(){
  console.log(goBulb = (goBulb == 'Go light bulb on') ? 'Go light bulb off' : 'Go light bulb on');
},false);

goButton.addEventListener('mouseenter', function(){
  console.log("Entered go buton");
});
goButton.addEventListener('mouseleave', function(){
  console.log("Left go buton");
});

})();
