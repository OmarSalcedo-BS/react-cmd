/* 
rfce -> Crea un componente funcional basado en función regular
rafce -> Crea un componente funcional basado en función flecha
*/
import './Header.css'
import logoPokemon from '../assets/img/pokemon.png'

function Header() {
  return (
    <div className='header-container'>
      <img src={logoPokemon} alt="LogoPokemón" title='logoPokemon' />
    </div>
  )
}

export default Header