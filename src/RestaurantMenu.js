import "./App.css";
import { useState } from "react";
import CartItems from "./CartItems.js";
import OrderConfirmation from "./OrderConfirmation.js";


const RestaurantMenu = ({ items }) => {
  const [menuItems, setMenuItems] = useState([]);

 

  const handleClick = (item) => {
    const OrderSummaryBTN = document.getElementById("OrderSummary");
    setMenuItems((previtem) => [...previtem, item]);
    OrderSummaryBTN.style.visibility = "visible";
  };

  const handleOrderSummary = () => {
const modal = document.getElementById('OrderComfirmation');
      
      modal.showModal();
  };

  return (
    <>
      <div className="cards">
        <div id="cart">
          <CartItems items={menuItems} />
          <button
            id="OrderSummary"
            style={{ visibility: "hidden" }}
            onClick={handleOrderSummary}
          >
            Confirm Order
          </button>
        </div>

        {items.map((item, index) => {
          return (
            <ul key={index}>
              <li>
                <img
                  src={item.image.desktop}
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
      </div >
      <dialog  id="OrderComfirmation" className="createOrder">
        <OrderConfirmation items={menuItems}  dialogId='OrderComfirmation' />
      </dialog>
    </>
  );
};

export default RestaurantMenu;
