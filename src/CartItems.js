const CartItems = ({ items }) => {
  console.log(items);
  return (
    //Need to push the items that are selected when clicked on add card Item.
    <div>
      {items.map((data) => {
        return (
          <h3>
            {data.name}- ${data.price}
          </h3>
        );
      })}
    </div>
  );
};

export default CartItems;
