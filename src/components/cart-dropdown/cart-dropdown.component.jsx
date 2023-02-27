import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import { BaseButton } from "../button/button.styles";

import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsContainer,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/cart");
  };
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <BaseButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</BaseButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
