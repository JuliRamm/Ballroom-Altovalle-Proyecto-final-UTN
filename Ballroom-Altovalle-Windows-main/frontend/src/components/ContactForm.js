'use client'
import{useState} from 'react'


export default function ContactForm({postUrl}){

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    const [sending,setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e =>{
        const {name, value} = e.target;
        setFormData(oldData =>({...oldData, [name]: value}));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        console.log("hola",postUrl)
     const rawResponse = await fetch(postUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
     });
     const response = await rawResponse.json();
     console.log(response)
     setSending(false)
     setMsg(response.message);
     if(response.error === false) {
        setFormData(initialForm)
     }
    }

    return (
        <>
        <form action="/contacto" method= "post"
        className="formulario" onSubmit={handleSubmit}>
            <p>
                <label>Nombre</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
            </p>
             <p>
                <label>Email</label>
                <input type="text" name="email"value={formData.email} onChange={handleChange} />
            </p>
             <p>
                <label>Telefono</label>
                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
            </p>
             <p>
                <label>Mensaje</label>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
            </p>
            <p className="centrar"><input type="submit" value="enviar" />
            </p>
        </form>
        {sending ? <p>Enviando...</p> : null}
        {msg ? <p>{msg}</p> :null}
        </>
    )
}