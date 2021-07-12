import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { Botigaservice } from '../../service/Botigaservice';
import Goback from './../Goback/Goback'


const botigaservice = new Botigaservice();
const handleOnclick = (idBotiga) => idBotiga

const Listbotigues = () => {
    const history = useHistory()
    const [botigues, setBotigues] = useState()

    useEffect(() => {
        botigaservice.getAll().then(data => setBotigues(data))

    }, [])

    const renderBotiga = (botiga) => {
        const { idBotiga, nom, capacitat } = botiga

        return (
            <tr className="rows" onClick={() => {

                let id = handleOnclick(idBotiga)
                history.push(`/botiga/${id}`)

            }} key={idBotiga}>

                <td className="elementtable">{idBotiga}</td>
                <td className="elementtable">{nom}</td>
                <td className="elementtable">{capacitat}</td>

            </tr>
        )
    }


    return (

        <section id="wrappebotigues">
            <Router>
                <table className="tablebotiga">
                    <caption>Llista de Botigues</caption>
                    <thead>
                        <tr>
                            <th>ID Botiga</th>
                            <th>Nom Botiga</th>
                            <th>Capacitat Botiga</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            botigues ?
                                (botigues.map(botiga => renderBotiga(botiga))) : <span>No hay datos</span>

                        }
                    </tbody>
                    <tfoot id="ftbotiga" >
                        <tr>
                            <input type="Button" id="newbotiga" className="btnfootetableBotigues" value="Nuevo"
                                onClick={() => {
                                    history.push("/novabotiga")
                                }} />
                            <input type="Button" id="modifcabotiga" className="btnfootetableBotigues" value="Modificar"
                                onClick={() => {
                                    history.push("/modificabotiga")
                                }} />
                            <input type="Button" id="eliminabotiga" className="btnfootetableBotigues" value="Eliminar" onClick={() => {
                                history.push("/eliminarbotiga")
                            }} />
                        </tr>

                    </tfoot>
                </table>

            </Router>
            <Goback />
        </section >

    )
}



export default Listbotigues;
