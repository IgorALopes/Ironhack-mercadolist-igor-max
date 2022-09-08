import { useState } from "react"
import axios from "axios"

export function AddItem() {
    const [form, setForm] = useState({
        product: ''
    })

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://ironrest.herokuapp.com/mercadoIgorMax",
                form
            )
            console.log(response)
        } catch(err) {
            console.log(err)
        }
    }


    return <form onSubmit={handleSubmit}>
        <label htmlFor="produto">Produto:</label>
        <input id="produto" name='product' type="txt" value={form.product} onChange={handleChange}/>
        <button type="submit">Adicionar!</button>
    </form>
}