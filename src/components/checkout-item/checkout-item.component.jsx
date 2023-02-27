import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { deleteItemFromCart, increaseCartItemCount, decreaseCartItemCount } =
    useContext(CartContext);

  const deleteCheckoutItem = () => deleteItemFromCart(cartItem);
  const increaseCheckoutItemCount = () => increaseCartItemCount(cartItem);
  const decreaseCheckoutItemCount = () => decreaseCartItemCount(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decreaseCheckoutItemCount}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseCheckoutItemCount}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}$</BaseSpan>
      <RemoveButton onClick={deleteCheckoutItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
