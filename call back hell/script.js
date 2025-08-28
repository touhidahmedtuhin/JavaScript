let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruitName, callProduction) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruitName]} was selected.`);
    callProduction();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log(`Production has started.`);
    setTimeout(() => {
      console.log(`The food has been chopped`);
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);
        setTimeout(() => {
          console.log(`The machine was started`);
          setTimeout(() => {
            console.log(`Ice cream was placed on ${stocks.holder[0]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added as toppings`);
              setTimeout(() => {
                console.log(`Serve ice the icecream`);
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};
order(0, production);
