import "./App.css";
const CartItems = ({ items, qty }) => {
  return (
    //Need to push the items that are selected when clicked on add card Item.
    <div className="menuItems">
      <>
        <h4>
          {qty}x - {items.name}- ${items.price}
        </h4>
      </>
    </div>
  );
};

export default CartItems;
