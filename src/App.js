import React, { useState } from "react";
import "../src/css/bootstrap.css";
import "../src/css/style.css";
import "../src/css/responsive.css";
import "../src/css/header.css";

import Banner from "./components/Banner";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Book from "./components/Book";
import Footer from "./components/Footer";
import SelectedItemsPopup from "./components/SelectedItemsPopup";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const items = [
    {
      id: 1,
      name: "Spicy Pepperoni Pizza",
      description: "A classic pizza with mozzarella and basil.",
      price: 15,
      img: "/menu2.jpg",
    },
    {
      id: 2,
      name: "Veggie Supreme Pizza",
      description: "Loaded with vegetables and cheese.",
      price: 17,
      img: "/menu3.jpg",
    },
    {
      id: 3,
      name: "Hawaiian Pizza",
      description: "Ham and pineapple for a sweet-savory combo.",
      price: 10,
      img: "/menu1.jpg",
    },
    {
      id: 4,
      name: "BBQ Chicken Pizza",
      description: "Chicken, BBQ sauce, mozzarella, and red onions.",
      price: 18,
      img: "/menu4.jpg",
    },
    {
      id: 5,
      name: "Four Cheese Pizza",
      description: "A blend of mozzarella, cheddar, gouda, and parmesan.",
      price: 15,
      img: "/menu2.jpg",
    },
    {
      id: 6,
      name: "Seafood Pizza",
      description: "A delicious mix of shrimp, calamari, and pesto sauce.",
      price: 20,
      img: "/menu3.jpg",
    },
    {
      id: 7,
      name: "Margherita Pizza",
      description: "Fresh tomatoes, mozzarella, and basil.",
      price: 12,
      img: "/menu1.jpg",
    },
    {
      id: 8,
      name: "Spicy Pepperoni Pizza",
      description: "Fresh tomatoes, mozzarella, and basil.",
      price: 12,
      img: "/menu4.jpg",
    },
    {
      id: 9,
      name: "Veggie Supreme Pizza",
      description: "Fresh tomatoes, mozzarella, and basil.",
      price: 12,
      img: "/menu4.jpg",
    },
  ];

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id); // tìm kiếm một mặt hàng đã có trong giỏ hàng có cùng thông tin id với mặt hàng đang được thêm vào.
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem  // False Case: nó chỉ trả về giá trị gốc cartItem mà không có bất kỳ thay đổi nào.
        )
      );
    } else {  
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== itemId));  // tạo ra một mảng mới loại trừ mặt hàng có id. khớp.
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };
  console.log("isPopupVisible", isPopupVisible);

  return (
    <div>
      <div className="wrapper-header">
        <Header
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          togglePopup={togglePopup}
        />  
        {isPopupVisible && (
          <SelectedItemsPopup
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            togglePopup={togglePopup}
          />
        )}
      </div>
      <Banner />
      <Menu items={items} onAddToCart={handleAddToCart} />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
