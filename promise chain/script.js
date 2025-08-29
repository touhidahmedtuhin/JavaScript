let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shope is closed"));
    }
  });
};

order(2000,()=>console.log(`${stocks.Fruits[0]} was selected.`))
.then(()=>{
  return order(0,()=> console.log(`The production has started.`))
})
.then(()=>{
  return order(2000,()=> console.log(`The food was chopped.`))
})
.then(()=>{
  return order(1000,()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[0]} was added.`))
})
.then(()=>{
  return order(1000,()=> console.log(`Machine was started`))
})
.then(()=>{
  return order(2000,()=> console.log(`Ice cream was placed on ${stocks.holder[0]}`))
})
.then(()=>{
  return order(3000,()=> console.log(`${stocks.toppings[0]} was added as toppings`))
})
.then(()=>{
  return order(2000,()=> console.log(`Serve ice the icecream`))
})
.catch(()=>{
  console.log(`Customer left`);
})
.finally(()=>{
  console.log(`Day ended, shop is closed`);
})