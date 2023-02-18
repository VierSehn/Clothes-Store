import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { deleteItemFromCart, increaseCartItemCount, decreaseCartItemCount } =
    useContext(CartContext);

  const deleteCheckoutItem = () => deleteItemFromCart(cartItem);
  const increaseCheckoutItemCount = () => increaseCartItemCount(cartItem);
  const decreaseCheckoutItemCount = () => decreaseCartItemCount(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseCheckoutItemCount}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseCheckoutItemCount}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}$</span>
      <div className="remove-button" onClick={deleteCheckoutItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
