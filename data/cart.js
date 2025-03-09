export let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
    },
  ];
}
const saveToStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

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

  saveToStorage();
};

export const removeFromCart = (productId) => {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
};
