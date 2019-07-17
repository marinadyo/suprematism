import './styles/index.scss';

var artboard = document.querySelector('.artboard');
var circle = document.querySelector('.artboard__figure--19');

// var colors = [
//   '#000',
//   '#f00',
//   '#0f0',
//   '#00f',
// ];

var onMouseMove = function() {
  console.log(`left: ${event.x}px`);
  circle.style = `left: ${event.x}px; top: ${event.y}px`;
};

artboard.addEventListener('mousemove', onMouseMove);


// addEventListener(eventName, callBack) {
//   ...
//   if(eventName = 'click') {
//     ...
//     var event = {
//       ...
//       mouseX: 100,
//       ...
//     }
//
//     callBack(event);
//
//   }
//   ...
// }


//
// console.log(artboard);
//
//
//
//
// function plus(a, b) {
//   return a + b;
// }
//
// console.log(plus(100, 100));



// setInterval(function() {
//   var index = Math.round(Math.random() * 3);
//   circle.style = `background-color: ${colors[index]}`;
//
// }, 1000);

// function hello(name) {
//   console.log('Hello, ' + name);
//   console.log(`Hello, ${name}`);
// }
//
// hello('Marina');
// hello('Andrey');

// var user = {
//   name: 'Ivan Ivanov',
//   age: 18,
//   getInfo: function(repeat) {
//     var i;
//
//     for(i = 0; i < repeat; i++) {
//       console.log(`Hello! my name is ${this.name}, my age is ${this.age}`);
//     }
//   }
// };
//
// user.getInfo(2);


// var someObject = {
//   name: 'Andrey',
//   age: 38,
//   hands: {
//     leftHand: 5,
//     rightHand: 3
//   }
// };
//
// // console.log(someObject.name, someObject.age, someObject.hands.rightHand);
//
//
// var someFunction =  function(text) { console.log(text); };
//
// var someArray = [1, 'Test', someObject, someFunction];
//
// console.log('length = ', someArray.length);
//
// for(var i = 0; i < someArray.length; i++) {
//   console.log(someArray[i]);
// }
