

const OrderConfirmation = ({ items,dialogId }) => {


  return (
    <div >
      {items.map((data, index) => {
        return (
          <h3 key={index}>
            {data.name}- ${data.price}
          </h3>
        );
      })}
      <button id="OrderSummary" onClick={()=>{
        const diaLog = document.getElementById(dialogId);
        diaLog.close();
      }}>Start New Order</button>
    </div>
  );
};

export default OrderConfirmation;
