const products = [
  {
    number: 1,
    price: 100,
    name: "Orange Juice",
  },
  {
    number: 2,
    price: 200,
    name: "Soda",
  },
  {
    number: 3,
    price: 150,
    name: "Chocolate snack",
  },
  {
    number: 4,
    price: 250,
    name: "Cookies",
  },
  {
    number: 5,
    price: 180,
    name: "Gummy bears",
  },
  {
    number: 6,
    price: 500,
    name: "Condoms",
  },
  {
    number: 7,
    price: 120,
    name: "Crackers",
  },
  {
    number: 8,
    price: 220,
    name: "Potato chips",
  },
  {
    number: 9,
    price: 80,
    name: "Small snack",
  },
];

const coins = [500, 200, 100, 50, 20, 10];

function vendingMachine(products, amount, productId) {
  try {
    if (!products) {
      throw new Error("There is no products available!");
    }
    buyedProduct = products.find(
      (product) => product.price <= amount && product.number === productId
    );
    if (buyedProduct) {
      const change = amount - buyedProduct.price;
      const changeInCoins = amountTocoins(change, coins);
      return { product: buyedProduct.name, change: changeInCoins };
    }
    throw new Error(`Sorry, the product is not available! `);
  } catch (err) {
    console.log(err.message);
    return false;
  }
}

function amountTocoins(amount, coins) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(amountTocoins(left, coins));
    } else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
}

// TESTS
console.log(vendingMachine(products, 300, 1));
console.log(vendingMachine(products, 200, 2));
console.log(vendingMachine(products, 1300, 1));
console.log(vendingMachine(products, 200, 7));
// console.log(vendingMachine(products, 0, 7));
console.log(vendingMachine(products, 10, 2));
console.log(vendingMachine(null, 10, 2));
