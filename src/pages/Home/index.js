import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function Home() {
  const [produtos, setProdutos] = useState([]);
  const [needReload, setNeedReload] = useState(false);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/mercadoIgorMax"
        );

        setProdutos([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProdutos();
  }, [needReload]);

  function handleToast(id) {
    toast((t) => (
      <span>
        Tem certeza que quer <b>deletar</b>?
        <button onClick={handleDelete(id)}>Sim</button>
        <button onClick={() => toast.dismiss(t.id)}>Não</button>
      </span>
    ));
  }

  async function handleDelete(id) {
    try {
      console.log(id);
      await axios.delete(`https://ironrest.herokuapp.com/mercadoIgorMax/${id}`);
      setNeedReload(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Lista de Compras</h1>
      <Link to="/add-item">
        <button>Adicionar item</button>
      </Link>
      {produtos.map((currentProduct) => {
        return (
          <>
            <h2>{currentProduct.product}</h2>

            <button
              onClick={() => {
                handleToast(currentProduct._id);
              }}
            >
              Deletar
            </button>
          </>
        );
      })}
    </>
  );
}
