

const RestaurantMenu = ({ items }) => {
    console.log(items);
  
  return (
    <div>
        {
            items.map((item,index)=>{
                return(<ul key={index}>
                    <li><img src={item.image.desktop} alt={item.name} /></li>
                    <li>{item.name}</li>
                    <li>{item.category}</li>
                    <li>{item.price}</li>

                </ul>)
            })
        }

        this is restaurant menu
      {/* <img src={items.image.desktop} alt="resmenuImage" />
      <h1 key={items.price}>{items.price}</h1>
      <h1 key={items.category}>{items.category}</h1>
      <h1 key={items.name}>{items.name}</h1> */}
    </div>
  );
};

export default RestaurantMenu;
