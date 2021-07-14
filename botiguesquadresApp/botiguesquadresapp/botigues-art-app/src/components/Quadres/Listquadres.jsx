import React, { useState, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import { Botigaservice } from '../../service/Botigaservice';
import './../Quadres/stylequadres.css'
import Goback from './../Goback/Goback'

const botigaservice = new Botigaservice();

const renderQuadre = (quadre) => {
    const { idquadre, nom, autor, dataEntrada } = quadre

    return (
        <tr className="rows" key={idquadre}>
            <td className="elementtable">{idquadre}</td>
            <td className="elementtable">{nom}</td>
            <td className="elementtable">{autor}</td>
            <td className="elementtable">{dataEntrada}</td>

        </tr>

    )
}



const Listquadres = ({ idbotiga }) => {
    const [quadres, setQuadres] = useState()
    const history = useHistory()
    const [deshabilitat, setDeshabilitat] = useState(true)

    useEffect(() => {
        botigaservice.getQuadres(idbotiga).then(data => setQuadres(data))
        if (quadres != undefined) { setDeshabilitat(false) }
    }, [])

    botigaservice.getQuadres(idbotiga).then(data => setQuadres(data))

    return (

        <section id="wrappebotigues">

            <table className="tablebotiga">
                <caption>Quadres disponibles a la Botiga</caption>
                <thead>
                    <tr>
                        <th>Referencia</th>
                        <th>Nom Quadre</th>
                        <th>Autor</th>
                        <th>Data D'entrada</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        quadres ?
                            (quadres.map(quadre => renderQuadre(quadre))) : <span>No hay datos</span>

                    }
                </tbody>
                <tfoot id="ftbotiga" >
                    <tr>
                        <input id="newbotiga" className="btnfootetableBotigues" value="Nuevo"
                            onClick={
                                () => { history.push(`/botiga/${idbotiga}/quadrenou/`); }
                            }
                        />
                        <input href="#" id="modifcabotiga" className="btnfootetableBotigues" value="Modificar"
                            disabled={deshabilitat} onClick={
                                () => { history.push(`/botiga/${idbotiga}/modificarquadre/`); }
                            } />
                    </tr>
                </tfoot>
            </table>
            <Goback />
        </section >

    )
}



export default Listquadres;