import React from 'react'

import ListBotigues from '../components/Botigues/Listbotigues'
import './../components/Botigues/botigues.css'
const Botigues = () => {
    return (
        <body id="wrapper">
            <div className="container">
                <main>
                    <section className="botigues">
                        <ListBotigues />
                    </section>
                </main>

            </div>


        </body>

    )
}

export default Botigues
