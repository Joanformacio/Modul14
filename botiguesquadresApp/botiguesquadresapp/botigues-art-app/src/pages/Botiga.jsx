import React from 'react'
import { useParams } from 'react-router'
import ListQuadres from '../components/Quadres/Listquadres'


const Botiga = () => {
    const { id } = useParams()
    return (
        <div>
            <body id="wrapper">
                <div className="container">
                    <main>
                        <section className="botigues">
                            <ListQuadres idbotiga={id} />
                        </section>
                    </main>

                </div>
            </body>
        </div>
    )
}

export default Botiga
