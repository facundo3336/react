import { Button } from "components/Button/Button";
import "./CreateProduct.css";

export const CreateProduct = ({}) => {
  return (
    <form className="createProductForm">
      <input type="text" placeholder="Titulo" />
      <br />
      <input type="number" placeholder="Precio" />
      <br />
      <input type="number" placeholder="Stock" />
      <br />
      <input type="text" placeholder="Descripcion" />
      <br />
      <input type="text" placeholder="Titulo" />
      <br />
      <input type="number" placeholder="Id de la categoria" />
      <br />
      <Button text={"Crear Producto"} />
    </form>
  );
};
