import "./App.css";

const RestaurantMenu = ({ items }) => {
  console.log(items);

  return (
    <>

      <div className="cards">
      
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
              <div className="addbutton">Add to Cart</div>
              <li className="itemcategory">{item.category}</li>
              <li className="itemname">{item.name}</li>
              <li className="price">${item.price}</li>
            </ul>
          );
        })}
        <div>Cart</div>
      </div>
    </>
  );
};

export default RestaurantMenu;
