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
        idquadre: 0,
        nom: "",
        autor: "",
        dataEntrada: "",
        idbotiga: id
    })
    const [deshabilitat, setDeshabilitat] = useState(true)



    useEffect(() => {
        botigaservice.getQuadres(idbotiga).then(data => setQuadres(data))

    }, [idbotiga])


    const handleInputChange = (event) => {
        debugger
        setQuadre({
            ...quadre,
            [event.target.name]: event.target.value,

        })
    }

    const handleSelected = (e) => {

        let posicion;
        let auxQuadre = {};
        let index = e.target.selectedIndex
        if (index != 0 && quadres.length > 0) {
            posicion = index - 1;
            document.getElementById('inputnom').value = quadres[posicion].nom
            document.getElementById('inputautor').value = quadres[posicion].autor
            document.getElementById('inputdataentrada').value = quadres[posicion].dataEntrada

            auxQuadre = ({
                idquadre: quadres[posicion].idquadre,
                nom: quadres[posicion].nom,
                autor: quadres[posicion].autor,
                dataEntrada: quadres[posicion].dataEntrada,
                idbotiga: quadres[posicion].idbotiga
            })

            setQuadre(auxQuadre)
            setDeshabilitat(false)
        }


    }

    const enviarDatos = (event) => {
        event.preventDefault()
        botigaservice.saveQuadre(quadre)
        botigaservice.getQuadres(idbotiga).then(data => setQuadres(data))
    }

    return (
        <section id="wrappebotigues">

            <form className="form_botiga" onSubmit={enviarDatos} >
                <h3>Modifica Quadre</h3>
                <div className="botigaInputform">
                    <label >Selecciona</label>
                    <select placeholder="Selcciona un quadre" className="form-control" name="quadres" onChange={handleSelected}>
                        <option>Selecciona elemento a Modificar</option>
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
                    <input id="inputdataentrada" type="text" disabled={deshabilitat} placeholder="Data Entrada" className="form-control" onChange={handleInputChange} name="dataEntrada" />
                </div>
                <button type="submit" disabled={deshabilitat} onClick={history.goBack} className="save_botiga">Guardar Dades</button>
            </form>
            <Goback />
        </section >
    );
}

export default Updatequadre