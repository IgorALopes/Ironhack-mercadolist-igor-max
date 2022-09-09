import { useState, useEffect } from "react"
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"

export function EditPage () {
   const navigate = useNavigate()
   const {id} = useParams()
    
    const [form, setForm] = useState({
        product: ''
    })

    useEffect(() => {
        async function fetchProduct() {
            try{
                const response = await axios.get(`https://ironrest.herokuapp.com/mercadoIgorMax/${id}`)
                
                delete response.data._id
                setForm({...response.data})
                console.log(form)
            } catch(err) {
                console.log(err)
            }
        }
        fetchProduct()
    }, [])

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.put(
                `https://ironrest.herokuapp.com/mercadoIgorMax/${id}`,
                form
            )
            navigate('/')
            console.log(response)
        } catch(err) {
            console.log(err)
        }
    }


    return <form onSubmit={handleSubmit}>
        <label htmlFor="produto">Produto:</label>
        <input id="produto" name='product' type="txt" value={form.product} onChange={handleChange}/>
        <button type="submit">Editar</button>
    </form>

}