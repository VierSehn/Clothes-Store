import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingProduct = cartItems.find((item) => item.id === productToAdd.id);
  if (existingProduct) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const deleteCartItem = (cartItems, itemToDelete) =>
  cartItems.filter((item) => item.id !== itemToDelete.id);

const increaseItemCount = (cartItems, itemToIncreaseCount) =>
  cartItems.map((item) =>
    item.id === itemToIncreaseCount.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

const decreaseItemCount = (cartItems, itemToDecreaseCount) =>
  cartItems
    .map((item) =>
      item.id === itemToDecreaseCount.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  increaseCartItemCount: () => {},
  decreaseCartItemCount: () => {},
  cartCounter: 0,
  itemsCost: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [itemsCost, setItemsCost] = useState(0);

  useEffect(() => {
    const newCartCounter = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newItemsCost = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setCartCounter(newCartCounter);
    setItemsCost(newItemsCost);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const deleteItemFromCart = (itemToDelete) => {
    setCartItems(deleteCartItem(cartItems, itemToDelete));
  };

  const increaseCartItemCount = (cartItemToIncreaseCount) => {
    setCartItems(increaseItemCount(cartItems, cartItemToIncreaseCount));
  };

  const decreaseCartItemCount = (cartItemToDecreaseCount) => {
    setCartItems(decreaseItemCount(cartItems, cartItemToDecreaseCount));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    deleteItemFromCart,
    increaseCartItemCount,
    decreaseCartItemCount,
    cartItems,
    cartCounter,
    itemsCost,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
