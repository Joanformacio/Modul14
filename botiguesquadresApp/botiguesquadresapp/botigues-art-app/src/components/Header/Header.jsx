
import { React } from 'react'
import { BrowserRouter as Roouter, Link, useHistory } from 'react-router-dom'

const Header = () => {
    const History = useHistory();
    function handleHome() {
        History.push("/")

    }

    return (
        <header id="cabecera">
            <Roouter>
                <div class="logo">
                    <h1><Link onClick={handleHome} title="A la página de inicio"><span class="color">Art</span>Shops</Link></h1>

                </div>

                <ul id="icons">
                    <li><a href="https://es-es.facebook.com" title="Página de Facebook" target="_blank" id="facebook"><span class="sr-only">Facebook</span></a></li>
                    <li><a href="https://twitter.com/?lang=es" title="Página de Twitter" target="_blank" id="twitter"><span class="sr-only">Twitter</span></a></li>
                    <li><a href="https://www.pinterest.es/" title="Página de Pinterest" target="_blank" id="pinterest"><span class="sr-only">Pinterest</span></a></li>
                    <li>
                        <a href="https://www.instagram.com/" title="Página de Instagram" target="_blank" id="instagram"> <span class="sr-only">Instagram</span></a>
                    </li>
                </ul>

            </Roouter>
        </header>
    )
}

export default Header

