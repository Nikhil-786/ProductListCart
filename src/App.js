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
      <h1 id="head">Desserts</h1>
     
      <div className="maindiv">
        <RestaurantMenu items={desertdata} />
      </div>
    </div>
  );
}

export default App;
