import IProduct from "../types/IProduct";

const exchangedPrice = (price: number, exchangeRate: number): string => {
  return Math.ceil(price * exchangeRate).toFixed(2);
};

const convertIntegerToDecimal = (price: number) => {
  return price / 100;
};

const integerSubTotal = (price: number, qty: number) => {
  return price * qty;
};

const integerToUnitPrice = (price: number, exchangeRate: number, qty: number = 1): string => {
  const subTotalInteger = integerSubTotal(price, qty);
  const subTotalFloat = exchangedPrice(subTotalInteger, exchangeRate);
  const subTotalNumber = parseFloat(subTotalFloat);
  return convertIntegerToDecimal(subTotalNumber).toFixed(2);
};

const basketTotal = (products: IProduct[], exchangeRate: number): string => {
  // debugger;
  let total: number = 0;
  if (products.length > 0) {
    for (const product of products) {
      const { price, qty } = product;
      const subTotal = integerToUnitPrice(price, exchangeRate, qty);
      total = total + parseFloat(subTotal);
    }
  }
  return total.toFixed(2);
};

export {
  integerToUnitPrice,
  basketTotal,
};
