import "./App.css";
import { useState } from "react";
import CartItems from "./CartItems.js";
const RestaurantMenu = ({ items }) => {
  const [menuItems, setMenuItems] = useState([]);
  const handleClick = (item) => {
    setMenuItems((previtem)=>[...previtem,item]);
  };

  return (
    <>
      <div className="cards">
        <div id="cart">
          <CartItems items={menuItems} />
        </div>
        {items.map((item, index) => {
          return (
            <ul key={index}>
              <li>
                <img
                  src="./image-baklava-desktop.jpg"
                  alt={item.name}
                  className="menuimg"
                />
              </li>
              <button className="addbutton" onClick={() => handleClick(item)}>
                Add to Cart
              </button>
              <li className="itemcategory">{item.category}</li>
              <li className="itemname">{item.name}</li>
              <li className="price">${item.price}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
