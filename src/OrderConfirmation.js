const OrderConfirmation = ({ items, dialogId }) => {
  return (
    <div >
      <img className="finalOrder" src="./assets/images/icon-order-confirmed.svg" alt="" />
      <h1 className="finalOrder">Order Confirmed</h1>
      <label className="finalOrder" htmlFor="food">We hope you enjoy your food!</label>
      {items.map((data, index) => {
        return (
          <h3 className="finalOrder" key={index}>
            {data.count}x {data.name}- ${data.price}
          </h3>
        );
      })}
      <div className="finalOrder">
        Order Summary{" "}
        {items.reduce((acc, curr) => acc + curr.price * curr.count, 0)}
      </div>
      <button
        id="OrderSummary"
        onClick={() => {
          const diaLog = document.getElementById(dialogId);
          diaLog.close();
        }}
      >
        Start New Order
      </button>
    </div>
  );
};

export default OrderConfirmation;
