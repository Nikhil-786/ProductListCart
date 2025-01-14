import { useState } from "react";
import "./App.css";
const CartItems = ({ items }) => {
  const [increment ,setIncrement] = useState(1);
  const [decrement ,setDecrement] = useState(1);
  const handleIncrement=()=>{
    
  }
  return (
    //Need to push the items that are selected when clicked on add card Item.
    <div className="menuItems">
      {items.map((data, index) => {
        return (
          <>
            <h4 key={index}>
              <span>
                <span>qty</span>
                <button onClick={handleIncrement}>+</button>
                <input type="text" id="itemQty" placeholder={increment} />
                <button>-</button>
              </span>
              {data.name}- ${data.price}
            </h4>
          </>
        );
      })}
    </div>
  );
};

export default CartItems;
