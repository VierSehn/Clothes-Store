import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  deleteItemFromCart,
  removeItemToCart,
} from "../../store/cart/cart.action";
import { CartItem } from "../../store/cart/cart.types";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  const addCheckoutItemToCart = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const deleteCheckoutItem = () =>
    dispatch(deleteItemFromCart(cartItems, cartItem));
  const removeCheckoutCartItem = () =>
    dispatch(removeItemToCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeCheckoutCartItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addCheckoutItemToCart}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}$</BaseSpan>
      <RemoveButton onClick={deleteCheckoutItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
