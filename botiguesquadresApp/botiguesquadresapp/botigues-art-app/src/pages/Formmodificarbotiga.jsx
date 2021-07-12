import React from 'react'
import './../components/Botigues/botigues.css'
import Goback from './../components/Goback/Goback'
import Formupdatebotiga from '../components/Formupdatebotiga/Formupdatebotiga'


const Formmodificarbotiga = () => {
    return (
        <body id="wrapper">
            <div className="container">
                <main>
                    <section className="botigues">
                        <Formupdatebotiga />
                        <Goback />
                    </section>
                </main>

            </div>


        </body>

    )
}



export default Formmodificarbotiga
