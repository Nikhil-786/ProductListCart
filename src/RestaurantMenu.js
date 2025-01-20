import "./App.css";
import { useState } from "react";

import OrderConfirmation from "./OrderConfirmation.js";

const RestaurantMenu = ({ items }) => {
  const [menuItems, setMenuItems] = useState([]);

  const handleClick = (item, event, index) => {
    let next = 0;
    let count = 1;
    // console.log(typeof event.target.id);
    const convertId = parseInt(event.target.id);

    const operatorBTN = document.getElementById("Operator" + index);

    const addToCart = document.getElementById(event.target.id);
    const OrderSummaryBTN = document.getElementById("OrderSummary");
    console.log(operatorBTN);
    if (item.category === event.target.id) {
      operatorBTN.style.visibility = "visible";
      addToCart.style.visibility = "hidden";
      setMenuItems((previtem) => [
        ...previtem,
        { ...item, id: index, count: count },
      ]);
      OrderSummaryBTN.style.visibility = "visible";
    }
  };

  const handleAdd = (index, mitem) => {
    console.log("Add Item called" + mitem);
    console.log("Add Item called" + index);
    setMenuItems(
      mitem.map((data) => {
        if (data.id === index) {
          return {
            ...data,
            count: data.count + 1,
          };
        } else {
          return data;
        }
      })
    );
  };

  const handleSub = (index, mitem, event) => {
    let nextProduct = mitem.map((data) => {
      if (data.id === index) {
        return {
          ...data,
          count: data.count - 1,
        };
      } else {
        return data;
      }
    });

    setMenuItems(
      nextProduct.map((data) => {
        if (data.count === 0) {
          const addItem = document.getElementById(data.category);
          if (addItem) {
            addItem.style.visibility = "visible";
          }
          const operatorBTN = document.getElementById("Operator" + index);
          if (operatorBTN) {
            operatorBTN.style.visibility = "hidden";
          }
          return data;
        } else {
          return data;
        }
      })
    );

    nextProduct = nextProduct.filter((data) => data?.count > 0);

    // if (nextProduct.length === 0) {
    //   operatorBTN.style.visibility = "hidden";
    //   reverseAdd.style.visibility = "visible";
    // }
    setMenuItems(nextProduct);
  };

  const handleMenuClose = (dataId, removeOrder) => {
    console.log(dataId);
    console.log(removeOrder);
    const filterdata = removeOrder.filter((data) => data.id !== dataId);
    const filterBTN = removeOrder.filter((data) => data.id === dataId);
    const category = filterBTN.map((data) => data.category);
    const operatorBTN = removeOrder.filter((data) => data.id === dataId);
    const operatorID = operatorBTN.map((data) => data.id);
    const reverseBtn  = document.getElementById('Operator'+operatorID.toString());

    const addcartBTN = document.getElementById(category.toString());
    addcartBTN.style.visibility = "visible";
    reverseBtn.style.visibility='hidden';
   

    setMenuItems(filterdata);
  };

  const handleOrderSummary = () => {
    const modal = document.getElementById("OrderComfirmation");

    modal.showModal();
  };

  return (
    <>
      <div className="cards">
        <div id="cart">
          <h1 id="OrderHeader">Your Cart({menuItems.length})</h1>
          {menuItems.length === 0 ? (
            <img
              src="./assets/images/illustration-empty-cart.svg"
              alt="emptyCart"
            ></img>
          ) : (
            menuItems.length
          )}
          {menuItems.map((data, index) => {
            let result = 0;
            return (
              <div className="mainDiv" key={data.id}>
                <li className="orderList">
                  <b>{data.name}</b>
                </li>
                <div className="secDiv">
                  <li>
                    <span className="count">{data.count}x</span>&nbsp;&nbsp;@$
                    {data.price}
                    <span>
                      &nbsp;&nbsp;${(result = result + data.count * data.price)}
                    </span>
                  </li>
                  <span
                    className="close"
                    onClick={() => handleMenuClose(data.id, menuItems)}
                  >
                    X
                  </span>
                </div>
              </div>
            );
          })}
          <div>
            {menuItems.length === 0 ? (
              <label>Your added Item will appear here</label>
            ) : (
              <label>
                Order Summary-
                <h3>
                  $-
                  {menuItems.reduce(
                    (acc, curr) => acc + curr.price * curr.count,
                    0
                  )}
                </h3>
              </label>
            )}
          </div>
          &nbsp;
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
            <ul key={index} className="Itemcards">
              <li>
                <img
                  src={item.image.desktop}
                  alt={item.name}
                  className="menuimg"
                />
              </li>
              <button
                className="addbutton"
                id={item.category}
                onClick={(event) => handleClick(item, event, index)}
              >
                Add to Cart
              </button>
              <div
                style={{ visibility: "hidden" }}
                id={"Operator" + index}
                className="oerationButton"
              >
                <button id="add" onClick={() => handleAdd(index, menuItems)}>
                  +
                </button>
                <h5>QTY</h5>

                <button
                  id="sub"
                  onClick={(event) => handleSub(index, menuItems, event)}
                >
                  -
                </button>
              </div>

              <li className="itemcategory">{item.category}</li>
              <li className="itemname">{item.name}</li>
              <li className="price">${item.price}</li>
            </ul>
          );
        })}
      </div>
      <dialog id="OrderComfirmation" className="createOrder">
        <OrderConfirmation items={menuItems} dialogId="OrderComfirmation" />
      </dialog>
    </>
  );
};

export default RestaurantMenu;
