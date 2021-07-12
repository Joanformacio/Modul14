import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Botigaservice } from './../../service/Botigaservice'
import './../../estilos/estilosformulario.css'



const botigaservice = new Botigaservice();
const createSelectItems = (botiga) => {
    const { idBotiga, nom, capacitat } = botiga;

    return (
        <option key={idBotiga} value={idBotiga}>{idBotiga}-{nom}-{capacitat}</option>
    )
}



const Formupdatebotiga = () => {
    const history = useHistory()
    const [deshabilitat, setDeshabilitat] = useState(true)
    const [botigues, setBotigues] = useState([{}])
    const [botiga, setBotiga] = useState({
        idBotiga: 0,
        nom: "",
        capacitat: 0
    })

    useEffect(() => {
        botigaservice.getAll().then(data => setBotigues(data))

    }, [])

    const handleSelected = (e) => {

        let index = e.target.selectedIndex
        setBotiga({
            idBotiga: 0,
            nom: "",
            capacitat: 0
        })

        document.getElementById('input_nom').value = botigues[index].nom
        document.getElementById('input_capacitat').value = botigues[index].capacitat
        let auxBotiga = ({
            idBotiga: botigues[index].idBotiga,
            nom: botigues[index].nom,
            capacitat: botigues[index].capacitat,
        })
        setBotiga(auxBotiga)
        setDeshabilitat(false)
    }




    const handleInputChange = (event) => {
        event.preventDefault()
        setBotiga({
            ...botiga,
            [event.target.name]: event.target.value,
            [event.target.capacitat]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()

        botigaservice.save(botiga)
    }



    return (
        <section id="wrappebotigues">

            <form className="form_botiga" onSubmit={enviarDatos}>
                <h3>Moficar Botiga</h3>
                <div className="botigaInputform">
                    <label >Selecciona</label>
                    <select placeholder="Selecciona una botiga" className="form-control" name="botigues" onChange={handleSelected}>
                        {
                            botigues ?
                                (botigues.map(botiga => createSelectItems(botiga))) : <span>No hay datos</span>

                        }
                    </select>

                </div>
                <div className="botigaInputform">
                    <label for="nom">Nombre</label>
                    <input id="input_nom" type="text" disabled={deshabilitat} placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nom"></input>
                </div>
                <div className="botigaInputform">
                    <label for="capacitat">Capacitat</label>
                    <input type="text" disabled={deshabilitat} id="input_capacitat" placeholder="Capacitat" className="form-control" onChange={handleInputChange} name="capacitat"></input>
                </div>
                <button type="submit" onClick={history.goBack} className="save_botiga">Guardar Dades</button>
            </form>

        </section >
    );
}

export default Formupdatebotiga