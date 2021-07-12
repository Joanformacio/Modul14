import React from 'react'
import './../components/Botigues/botigues.css'
import Novabotiga from '../components/Novabotiga/Novabotiga'
import Goback from '../components/Goback/Goback'

const FormnovaBotiga = () => {
    return (
        <body id="wrapper">
            <div className="container">
                <main>
                    <section className="botigues">
                        <Novabotiga />
                        <Goback />
                    </section>
                </main>
            </div>
        </body>

    )
}

export default FormnovaBotiga