import { useParams } from "react-router-dom";
import { useOrder } from "../../hooks/order";
import { ItemsTable } from "../ItemsTable/ItemsTable";
import "./ThankYouPage.css";

export const ThankYouPage = ({}) => {
  const { id } = useParams();
  const order = useOrder(id);

  if (order === null) {
    return null;
  }

  const buyer = order.buyer || {};
  return (
    <div className="thankYouPageContainer">
      <h1>Gracias por comprar!</h1>
      <p>
        El id de su compra es: <strong>{id}</strong>
      </p>
      <div>
        <h3>Detalles del comprador:</h3>
        <div>
          <ul>
            <li>
              <strong>Nombre:</strong> {buyer.name} {buyer.lastName}
            </li>
            <li>
              <strong>Direccion:</strong> {buyer.address}, {buyer.city},{" "}
              {buyer.country}
            </li>
            <li>
              <strong>Numero de telefono:</strong> {buyer.phone}
            </li>
          </ul>
        </div>
        <h3>Productos:</h3>
        <ItemsTable items={order.items} />
      </div>
    </div>
  );
};
