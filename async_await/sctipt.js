let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve();
      }, ms);
    } else {
      reject(`For no reson`);
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0);
    console.log(`Start the production`);

    await time(2000);
    console.log(`The food was chopped.`);

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[0]} was added`);

    await time(1000);
    console.log(`Machine was started`);

    await time(2000);
    console.log(`Ice cream was placed on ${stocks.holder[0]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} was added as toppings`);

    await time(2000);
    console.log(`Serve ice the icecream`);
  } catch (error) {
    console.log(`Customer left`, error);
  } finally {
    console.log(`day ended ,shop is closed`);
  }
}
kitchen();
