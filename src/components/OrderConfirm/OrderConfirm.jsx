import { useParams } from "react-router-dom";

/* function OrderConfirm() {
  const { orderid } = useParams();
  return (
    <div>
      <h1>Gracias por comprar tus pasajes con nosotros!</h1>
      <small>Este es tu comprobante de compra: {orderid}</small>
    </div>
  );
} */





function OrderConfirm() {
  const { orderid } = useParams();
  return (
    <div style={{ background: "linear-gradient(to bottom, #ffcc00, #ff9900)" }}>
      <h1 style={{ color: "white" }}>Gracias por comprar tus pasajes con nosotros!</h1>
      <small style={{ color: "white" }}>Este es tu comprobante de compra: {orderid}</small>
    </div>
  );
}


export default OrderConfirm;