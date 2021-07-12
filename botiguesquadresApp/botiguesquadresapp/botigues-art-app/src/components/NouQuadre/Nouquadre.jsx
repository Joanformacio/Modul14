import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Botigaservice } from '../../service/Botigaservice'
import Goback from './../Goback/Goback'
import './../../estilos/estilosformulario.css'


const botigaservice = new Botigaservice();


const Novaquadre = ({ idbotiga }) => {
    const id = parseInt(idbotiga)
    let auxquadre = {
        nom: "",
        autor: "",
        dataentrada: "",
        idbotiga: id
    }

    const [quadre, setQuadre] = useState(auxquadre)
    const history = useHistory();
    const handleInputChange = (event) => {

        setQuadre({
            ...quadre,
            [event.target.name]: event.target.value,
            [event.target.autor]: event.target.value,
            [event.target.data_entrada]: event.target.value,
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()

        botigaservice.saveQuadre(quadre)
    }

    return (
        <section id="wrappebotigues">
            <h1>Formulario</h1>
            <form className="form_botiga" onSubmit={enviarDatos}>
                <h3>Nou Quadre</h3>
                <div className="botigaInputform">
                    <label for="nom">Nombre</label>
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nom"></input>
                </div>
                <div className="botigaInputform">
                    <label for="autor">Autor</label>
                    <input type="text" placeholder="Autor" className="form-control" onChange={handleInputChange} name="autor"></input>
                </div>
                <div className="botigaInputform">
                    <label for="dataentrada">Data d'Entrada</label>
                    <input type="text" placeholder="Data Entrada" className="form-control" onChange={handleInputChange} name="dataentrada"></input>
                </div>
                <button type="submit" onClick={history.goBack} className="save_botiga">Guardar Dades</button>
            </form>
            <Goback />
        </section >
    );
}

export default Novaquadre