import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Botigaservice } from '../../service/Botigaservice'
import Goback from './../Goback/Goback'
import './../../estilos/estilosformulario.css'


const botigaservice = new Botigaservice();
const createSelectItems = (quadre) => {
    const { idquadre, nom, autor, dataEntrada, idbotiga } = quadre;

    return (
        <option key={idquadre} value={idquadre}>{idquadre}-{nom}-{autor}-{dataEntrada}-{idbotiga}</option>
    )
}

const Updatequadre = ({ idbotiga }) => {

    const id = parseInt(idbotiga)
    const history = useHistory()
    const [quadres, setQuadres] = useState([{}])
    const [quadre, setQuadre] = useState({
        nom: "",
        autor: "",
        dataEntrada: "",
        idbotiga: id
    })
    const [deshabilitat, setDeshabilitat] = useState(true)



    useEffect(() => {
        botigaservice.getQuadres(idbotiga).then(data => setQuadres(data))

    }, [])

    const handleInputChange = (event) => {

        setQuadre({
            ...quadre,
            [event.target.name]: event.target.value,
            [event.target.autor]: event.target.value,
            [event.target.dataentrada]: event.target.value,
        })
    }

    const handleSelected = (e) => {
        debugger
        let index = e.target.selectedIndex
        if (quadres.length === 1) {
            document.getElementById('inputnom').value = quadres[0].nom
            document.getElementById('inputautor').value = quadres[0].autor
            document.getElementById('inputdataentrada').value = quadres[0].dataEntrada


        } else {
            let index = e.target.selectedIndex
            document.getElementById('inputnom').value = quadres[index].nom
            document.getElementById('inputautor').value = quadres[index].autor
            document.getElementById('inputdataentrada').value = quadres[index].dataEntrada
        }

        let q = ({
            idquadre: quadres[index].idquadre,
            nom: quadres[index].nom,
            autor: quadres[index].autor,
            idbotiga: quadres[index].idquadre,
        })
        setQuadre(q)
        setDeshabilitat(false)
    }

    const enviarDatos = (event) => {
        event.preventDefault()

        botigaservice.saveQuadre(quadre)
    }

    return (
        <section id="wrappebotigues">

            <form className="form_botiga" onSubmit={enviarDatos}>
                <h3>Modifica Quadre</h3>
                <div className="botigaInputform">
                    <label >Selecciona</label>
                    <select placeholder="Selcciona un quadre" className="form-control" name="quadres" onChange={handleSelected}>
                        {
                            quadres ?
                                (quadres.map(quadre => createSelectItems(quadre))) : <span>No hay datos</span>

                        }
                    </select>

                </div>
                <div className="botigaInputform">
                    <label for="nom">Nombre</label>
                    <input id="inputnom" type="text" disabled={deshabilitat} placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nom" />
                </div>
                <div className="botigaInputform">
                    <label for="autor">Autor</label>
                    <input id="inputautor" type="text" disabled={deshabilitat} placeholder="Autor" className="form-control" onChange={handleInputChange} name="autor" />
                </div>
                <div className="botigaInputform">
                    <label for="dataentrada">Data d'Entrada</label>
                    <input id="inputdataentrada" type="text" disabled={deshabilitat} placeholder="Data Entrada" className="form-control" onChange={handleInputChange} name="dataentrada" />
                </div>
                <button type="submit" onClick={history.goBack} className="save_botiga">Guardar Dades</button>
            </form>
            <Goback />
        </section >
    );
}

export default Updatequadre