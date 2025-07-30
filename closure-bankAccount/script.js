//Back Acount Example With Closures

function bankAccount(initialBlance) {
  let balance = initialBlance;

  return {
    deposite: (amount) => {
      balance = balance + amount;
      console.log(`You have Deposite : ${balance}৳`);
    },
    withDraw: (amount) => {
      if (balance < amount) {
        console.log(`You don't have sufficient balance`);
      } else {
        balance = balance - amount;
        console.log(`Withdaw ${amount}৳`);
      }
    },
    checkBalance: (amount) => {
      console.log(`Your Current Balance is: ${balance}৳`);
    },
  };
}

const karimAccount = bankAccount(1000);
console.log(karimAccount.deposite(1000));
console.log(karimAccount.withDraw(500));
console.log(karimAccount.checkBalance());
console.log(karimAccount.withDraw(3000));
