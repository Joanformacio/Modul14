import React from 'react'
import { Link } from 'react-router-dom'
import WelcomeScreen from '../components/WelcomScreen/WelcomScreen'


const WelcomPage = () => {
    return (

        <div className="container">
            <main>
                <section id="portada">
                    <WelcomeScreen>
                        <Link id="linkTaulsBotigues" to="/botigues"><h2>Gestion de Tiendas de Arte</h2></Link>
                    </WelcomeScreen>

                </section>
            </main>
        </div>

    )
}

export default WelcomPage
