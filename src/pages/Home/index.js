import { useState, useEffect } from "react"
import axios from "axios"
import{Link} from "react-router-dom"


export function Home() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function fetchProdutos() {
            try{
                const response = await axios.get(
                    "https://ironrest.herokuapp.com/mercadoIgorMax"
                )
                
                setProdutos([...response.data])

            } catch(err){
                console.log(err)
            }
        }
        fetchProdutos()
    }, [])
    
    return (
        <>
            <h1>Lista de Compras</h1>
            <Link to="/add-item">
            <button>Adicionar item</button>
            </Link>
            {produtos.map((currentProduct) => {
                return <h2>{currentProduct.product}</h2>
            })}
        </>
    )
}