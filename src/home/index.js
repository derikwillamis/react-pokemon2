import './app.css'
import BannerComplete from '../imagens/BannerComplete.png'
import Header from '../header';

function Home() {
    return (
        <div>
            <Header/>
        <div className='fundo'>
            <div className='containerFlex'>

            <div className='texto'>
                <h1>
                    Find all your <br/> favorite <br/> Pokemon
                </h1>
                <h2>
                    You can know the type of Pokemon,<br/> its strengths, disadvantages and <br/> abilities
                </h2>
                <div>
                    <button className='button-30'>
                        See pokemons
                    </button>
                </div>
            </div>
            <div className='banner'>
                <img src={BannerComplete} />
            </div>
            </div>
            </div>

        </div>
    )
}

export default Home;