import Logo from '../imagens/Logo.png'
import './app.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='displayFlex'>
            <div className='image'>
                <img src={Logo} />
            </div>
            <nav className='conteiner-button' >
                <h1>
                    <button>Home</button>
                </h1>
                <h1>
                    <button>Pokédex</button>
                </h1>
                <h1>
                    <button>Legendaries</button>
                </h1>
                <h1>
                    <button>Documentation</button>
                </h1>
            </nav>
        </div>
    )
}

export default Header;