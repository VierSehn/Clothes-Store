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
  const { addItemToCart, deleteItemFromCart, removeItemToCart } =
    useContext(CartContext);

  const addCheckoutItemToCart = () => addItemToCart(cartItem);
  const deleteCheckoutItem = () => deleteItemFromCart(cartItem);
  const removeCheckoutCartItem = () => removeItemToCart(cartItem);

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
