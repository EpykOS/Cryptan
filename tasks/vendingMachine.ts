interface IProductDTO {
    number: number;
    price: number;
    name: string;
};

interface IOperationDTO {
    product: string;
    change: Array<number>;
}

function vendingMachine(products: IProductDTO[], amount: number, productId: number): IOperationDTO | null {
  try {
    if (!products) {
      throw new Error("There is no products available!");
    }
    const buyedProduct = products.find(
      (product) => product.price <= amount && product.number === productId
    );
    if (buyedProduct) {
      const change = amount - buyedProduct.price;
      const changeInCoins = amountTocoins(change, coins);
      return { product: buyedProduct.name, change: changeInCoins };
    }
    throw new Error(`Sorry, the product ${productId} is not available! `);
  } catch (err) {
    console.log("Sorry, there was an error!", err);
    return;
  }
}

function amountTocoins(amount: number, coins: number[]): number[] {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      const left = amount - coins[0];
      return [coins[0]].concat(amountTocoins(left, coins));
    } else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
}


