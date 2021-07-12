import React from 'react'
import { useParams } from 'react-router-dom'
import Updatequadre from './../components/Updatequadre/Updatequadre'
import Goback from './../components/Goback/Goback'


function Formupdatequadre() {
    const { id } = useParams()
    return (
        <div className="container">
            <main>
                <section className="botigues">
                    <Updatequadre idbotiga={id} />
                    <Goback />
                </section>
            </main>

        </div>
    )
}

export default Formupdatequadre
