function greet(name, callBack) {
  console.log(`Hi ${name} `);
  callBack();
}

function sayBye() {
  console.log("Bye");
}

greet("karim", sayBye);

//Callback hell

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 5000);
}

getData(1, () => {
  console.log("data 2 loaded ...");
  getData(2, () => {
    console.log("data 3 loaded ...");
    getData(3, () => {
      console.log("data 4 loaded ...");
      getData(4);
    });
  });
});

another
const hello = () =>{
  console.log("Hello i am another");
}
setTimeout(hello,3000);

//another one

console.log("Start");

setTimeout(()=>{
  console.log("Inside settime out");
},3000);

console.log("End");

//Callbacks in Functions Handling Operations

function sum(a,b,sum){
   return callback(a, b);
}
function add  (x,y){
  return x + y;
}
function multi(x, y){
  return x * y ;
}
console.log(sum(3,4),add);

//Callback Hell (Nested Callbacks)

function step1(callback) {
  setTimeout(() => {
    console.log("step 1 completed");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("step 2 completed");
    callback();
  }, 2000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("step 3 completed");
    callback();
  }, 3000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});
