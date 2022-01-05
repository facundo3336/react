import { updateOrder } from "../../utils/order";
import { Button } from "../Button/Button";
import "./OrderDetail.css";
import { OrderLine } from "./OrderLine";

export const OrderDetail = ({ order }) => {
  async function handleClick() {
    try {
      await updateOrder(order.id, {
        finished: true,
      });
      alert("actualizado!");
    } catch (error) {
      console.log("Error");
    }
  }

  return (
    <div>
      <div className="orderDetailContainer">
        <div className="tableContainer">
          <table>
            <caption>Detalles del producto</caption>
            <tr>
              <th>Nombre del producto</th>
              <th>Cantidad</th>
            </tr>
            {order.lines &&
              order.lines.map((line) => {
                return <OrderLine key={line.productId} line={line} />;
              })}
          </table>
        </div>
        <div className="tableContainer">
          <table>
            <caption>Detalles de envio</caption>
            <tr>
              <td>Direccion</td>
              <td>{order.shipping && order.shipping.address}</td>
            </tr>
            <tr>
              <td>Ciudad</td>
              <td>{order.shipping && order.shipping.city}</td>
            </tr>
            <tr>
              <td>Costo de envio</td>
              <td>{order.shipping && order.shipping.cost}</td>
            </tr>
            <tr>
              <td>Pais</td>
              <td>{order.shipping && order.shipping.country}</td>
            </tr>
            <tr>
              <td>Nombre</td>
              <td>
                {order.shipping && order.shipping.name}{" "}
                {order.shipping && order.shipping.lastName}
              </td>
            </tr>
            <tr>
              <td>Celular</td>
              <td>{order.shipping && order.shipping.phone}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{order.email}</td>
            </tr>
            <tr>
              <td>Monto total</td>
              <td>{order.total}</td>
            </tr>
            <tr>
              <td>Fecha</td>
              <td>{order.date}</td>
            </tr>
          </table>
        </div>
      </div>
      {!order.finished && (
        <div className="finishOrderButton">
          <Button onClick={handleClick} text="Terminar Orden" />
        </div>
      )}
    </div>
  );
};
