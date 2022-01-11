import { updateOrder } from "utils/order";
import { Button } from "components/Button/Button";
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
    <div className="orderDetailPage">
      <div className="orderDetailContainer">
        <div className="tableContainer">
          <table>
            <caption>Detalles del producto</caption>
            <thead>
              <tr>
                <th>Nombre del producto</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {order.items &&
                order.items.map((line) => {
                  return <OrderLine key={line.productId} line={line} />;
                })}
            </tbody>
          </table>
        </div>
        <div className="tableContainer">
          <table>
            <caption>Detalles de envio</caption>
            <tbody>
              <tr>
                <td>Direccion</td>
                <td>{order.buyer && order.buyer.address}</td>
              </tr>
              <tr>
                <td>Ciudad</td>
                <td>{order.buyer && order.buyer.city}</td>
              </tr>
              <tr>
                <td>Costo de envio</td>
                <td>{order.buyer && order.buyer.cost}</td>
              </tr>
              <tr>
                <td>Pais</td>
                <td>{order.buyer && order.buyer.country}</td>
              </tr>
              <tr>
                <td>Nombre</td>
                <td>
                  {order.buyer && order.buyer.name}{" "}
                  {order.buyer && order.buyer.lastName}
                </td>
              </tr>
              <tr>
                <td>Celular</td>
                <td>{order.buyer && order.buyer.phone}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{order.buyer && order.buyer.email}</td>
              </tr>
              <tr>
                <td>Monto total</td>
                <td>{order.total}</td>
              </tr>
              <tr>
                <td>Fecha</td>
                <td>{order.date && order.date.toDate().toISOString()}</td>
              </tr>
            </tbody>
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
