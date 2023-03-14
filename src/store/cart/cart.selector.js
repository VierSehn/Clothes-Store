import { createSelector } from "reselect";

const selectCartReduser = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReduser],
  (cart) => cart.isCartOpen
)

export const selectCartItems = createSelector(
  [selectCartReduser],
  (cart) => cart.cartItems
)

export const selectCartCounter = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  )
)

export const selectItemsCost = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  )
)
