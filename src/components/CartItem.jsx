import React from "react";
import "../css/cartitem.css";

function CartItem({ item, updateQuantity }) {
  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(item.id, item.quantity - 1);
  };

  return (
    <li class="cart-item">
      <div class="cart-item-info">
        <span class="item-name">{item.name}</span>
        <span class="item-price"> - ${item.price}</span>
      </div>
      <div class="quantity-controls">
        <button class="quantity-btn decrease" onClick={handleDecrease}>
          -
        </button>
        <span class="item-quantity">{item.quantity}</span>
        <button class="quantity-btn increase" onClick={handleIncrease}>
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
