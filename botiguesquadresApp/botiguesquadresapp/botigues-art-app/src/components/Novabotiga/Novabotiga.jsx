import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Botigaservice } from '../../service/Botigaservice'
import './novabotiga.css'


const botigaservice = new Botigaservice();


const Novabotiga = () => {


    const [botiga, setBotiga] = useState(null)
    const history = useHistory();
    const handleInputChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setBotiga({
            ...botiga,
            [event.target.name]: event.target.value,
            [event.target.capacitat]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + botiga.nombre + ' ' + botiga.capacitat)
        botigaservice.save(botiga)
    }

    return (
        <section id="wrappebotigues">
            <h1>Formulario</h1>
            <form className="form_botiga" onSubmit={enviarDatos}>
                <h3>Nova Botiga</h3>
                <div className="botigaInputform">
                    <label for="nom">Nombre</label>
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nom"></input>
                </div>
                <div className="botigaInputform">
                    <label for="capacitat">Capacitat</label>
                    <input type="text" placeholder="Capacitat" className="form-control" onChange={handleInputChange} name="capacitat"></input>
                </div>
                <button type="submit" onClick={history.goBack} className="save_botiga">Guardar Dades</button>
            </form>

        </section >
    );
}

export default Novabotiga