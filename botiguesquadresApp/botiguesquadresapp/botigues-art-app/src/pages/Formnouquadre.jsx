import React from 'react'
import { useParams } from 'react-router-dom'
import NouQuadre from './../components/NouQuadre/Nouquadre'
import Goback from './../components/Goback/Goback'

function Formnouquadre() {
    const { id } = useParams()
    return (
        <div className="container">
            <main>
                <section className="botigues">
                    <NouQuadre idbotiga={id} />
                    <Goback />
                </section>
            </main>

        </div>
    )
}

export default Formnouquadre
