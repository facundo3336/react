import { Button } from "components/Button/Button";
import { useState } from "react";
import { validateProduct } from "utils/validation";
import "./CreateProduct.css";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const CreateProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "mario kart 8",
    price: 56.99,
    stock: 34,
    description: "asdasdasd",
    pictureUrl:
      "https://raulgames.com.uy/wp-content/uploads/2020/12/mario-kart-8-deluxe.jpg",
    categoryId: "1",
  });

  function handleChange(e, key) {
    setProduct({
      ...product,
      [key]: e.target.value,
    });
  }

  async function handleClick() {
    try {
      validateProduct(product);

      const db = getFirestore();

      const docRef = await addDoc(collection(db, "items"), product);
      console.log(docRef);
      if (docRef.id) {
        navigate(`/item/${docRef.id}`);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="createProductForm">
      <label htmlFor="name">Nombre: </label>
      <input
        onChange={(e) => handleChange(e, "name")}
        value={product.name}
        type="text"
        placeholder="Titulo"
        name="name"
      />
      <br />
      <label htmlFor="price">Precio: </label>
      <input
        onChange={(e) => handleChange(e, "price")}
        value={product.price}
        type="number"
        placeholder="Precio"
        name="price"
      />
      <br />
      <label htmlFor="stock">Stock: </label>
      <input
        onChange={(e) => handleChange(e, "stock")}
        value={product.stock}
        type="number"
        placeholder="Stock"
        name="stock"
      />
      <br />
      <label htmlFor="description">Descripcion: </label>
      <input
        onChange={(e) => handleChange(e, "description")}
        value={product.description}
        type="text"
        placeholder="Descripcion"
        name="description"
      />
      <br />
      <label htmlFor="urlImage">Url de la imagen: </label>
      <input
        onChange={(e) => handleChange(e, "pictureUrl")}
        value={product.pictureUrl}
        type="text"
        placeholder="Url de imagen"
        name="urlImage"
      />
      <br />
      <label htmlFor="categoryId">Id de la categoria</label>
      <input
        onChange={(e) => handleChange(e, "categoryId")}
        value={product.categoryId}
        type="number"
        placeholder="Id de la categoria"
        name="categoryId"
      />
      <br />
      <Button text={"Crear Producto"} onClick={handleClick} />
    </div>
  );
};
