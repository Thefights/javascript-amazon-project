export const cart = [];

export const addToCart = (productId) => {
  let matchingcartItem;

  const selectQuantity = document.querySelector(
    `.js-quantity-selector-${productId}`
  );

  const quantity = Number(selectQuantity.value);

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingcartItem = cartItem;
    }
  });

  if (matchingcartItem) {
    matchingcartItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }
};
