import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Botigaservice } from './../../service/Botigaservice'
import '../Novabotiga/novabotiga.css'



const botigaservice = new Botigaservice();
const createSelectItems = (botiga) => {
    const { idBotiga, nom, capacitat } = botiga;

    return (
        <option key={idBotiga} value={idBotiga}>{idBotiga}-{nom}-{capacitat}</option>
    )
}



const Eliminarbotiga = () => {
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


    const enviarDatos = (event) => {
        event.preventDefault()
        botigaservice.delete(botiga.idBotiga)
        history.goBack()
    }



    return (
        <section id="wrappebotigues">


            <form className="form_botiga" onSubmit={enviarDatos}>
                <h3>Eliminar Botiga</h3>
                <div className="botigaInputform">
                    <label >Selecciona</label>
                    <select placeholder="Selcciona una botiga" className="form-control" name="botigues" onChange={handleSelected}>
                        {
                            botigues ?
                                (botigues.map(botiga => createSelectItems(botiga))) : <span>No hay datos</span>

                        }
                    </select>

                </div>
                <div className="botigaInputform">
                    <label for="nom">Nombre</label>
                    <input id="input_nom" type="text" disabled={true} placeholder="Nombre" className="form-control" name="nom"></input>
                </div>
                <div className="botigaInputform">
                    <label for="capacitat">Capacitat</label>
                    <input type="text" id="input_capacitat" disabled={true} placeholder="Capacitat" className="form-control" name="capacitat"></input>
                </div>
                <button type="submit" onClick={enviarDatos} disabled={deshabilitat} className="save_botiga">Eliminar Dades</button>
            </form>

        </section >
    );
}

export default Eliminarbotiga