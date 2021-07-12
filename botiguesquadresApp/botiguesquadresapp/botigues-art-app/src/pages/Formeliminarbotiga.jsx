import React from 'react'
import './../components/Botigues/botigues.css'
import Goback from './../components/Goback/Goback'
import Eliminartebotiga from '../components/Eliminarbotiga/Eliminarbotiga'


const Formeliminarbotiga = () => {
    return (
        <body id="wrapper">
            <div className="container">
                <main>
                    <section className="botigues">
                        <Eliminartebotiga />
                        <Goback />
                    </section>
                </main>

            </div>


        </body>

    )
}



export default Formeliminarbotiga
