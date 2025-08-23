//Promise is the 'eventual' completion of task .It is an array object in javaScript.
//Let promise = new Promise ((resolve, reject)) =>{...}

//It has 3 state
//pending - the result is undefined
//resolved - the result is a value (fullfilled)
//rejected - the result is an error object

//Promise.then((res)=>{...})
//Promise.then((err)=>{...})

//simple promise
let promise5 = new Promise((resolve, reject) => {
       console.log("I am a Promise");
       resolve('success');
})

 function getData(dataId, getNextData) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (getNextData) {
        getData();c
      }
    }, 5000);
  });
}
let promise1  = getData(123);
console.log(promise1);

//Promise with then
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("successful");
  });
};

let promise = getPromise();

promise.then((res) => {
  setTimeout(() => {
    console.log("Promise result:", res);
  }, 3000);
});

//Promise chain
function getData(datId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", datId);
      resolve("success");
    }, 3000);
  });
}

getData(1).then(()=>{
  console.log("Data 2 is loadin...");
  return getData(2);
}).then(()=>{
  console.log("Data 3 is loading...");
  return getData(3);
}).then((res)=>{
  console.log("Data completion :",res);
})

//another promise
let p = new Promise((resolve, reject) => {
  let isTrue = false;
  if (isTrue) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

p.then((res) => {
  console.log("The promise is:", res);
}).catch((err) => {
  console.log("There is an :", err);
});

const isphoneStore = true;
const isPhoneAvailable = true;

function processMessage() {
  return new Promise((resolve, reject) => {
    if (!isphoneStore) {
      reject({
        name: "Wrong store",
        message: "sorry, this is not a phone store",
      });
    } else if (!isPhoneAvailable) {
      reject({
        name: "Out of stock",
        message: "Sorry, this x model is out of stock",
      });
    } else {
      resolve({
        name: "Ok",
        message: "The X phone is available! How many you want to buy?",
      });
    }
  });
}
processMessage()
  .then((res) => {
    setTimeout(() => {
      console.log(res.message);
    }, 3000);
    console.log("Request checking...");
  })

  .catch((rej) => {
    setTimeout(() => {
      console.log(rej.message);
    }, 3000);
    console.log("Request checking...");
  });
