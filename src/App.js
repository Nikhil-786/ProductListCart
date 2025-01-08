import "./App.css";
import { data } from "./utils/data";
import { useEffect, useState } from "react";
import RestaurantMenu from "./RestaurantMenu";

function App() {
  const [desertdata, setData] = useState([]);

  useEffect(() => {
  
    setData(data);
  }, []);

  return (
    <div className="App">
      <h1>Desserts</h1>
      <div>
      
         <RestaurantMenu items={desertdata} />
   
      </div>
    </div>
  );
}

export default App;
