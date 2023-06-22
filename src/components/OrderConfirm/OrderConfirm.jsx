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
    <div style={{ background: "linear-gradient(to bottom, #000033, #000066)" }}>
      <h1 style={{ color: "white" }}>Gracias por comprar tus pasajes con nosotros!</h1>
      <small style={{ color: "white", fontSize: "1.2em" }}>Este es tu comprobante de compra: <span style={{ fontWeight: "bold", color: "yellow" }}>{orderid}</span></small>
    </div>
  );
}


export default OrderConfirm;


/*


function OrderConfirm() {
  const { orderid } = useParams();

  // Encuentra la ciudad correspondiente al orderid
  const ciudad = Ciudades.find((ciudad) => ciudad.id === orderid);

  return (
    <div style={{ background: "linear-gradient(to bottom, #000033, #000066)" }}>
      <h1 style={{ color: "white" }}>Gracias por comprar tus pasajes a {ciudad.nombre} con nosotros!</h1>
      <small style={{ color: "white", fontSize: "1.2em" }}>Este es tu comprobante de compra: <span style={{ fontWeight: "bold", color: "yellow" }}>{orderid}</span></small>
    </div>
  );
}

export default OrderConfirm;



*/




