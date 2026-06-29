import { useState } from 'react'
import PokeDisplay from './components/PokeDisplay'
import BanList from './components/BanList'
import axios from 'axios'
import './App.css'


// generates a random Pokemon based on National Pokedex number
function generateRandomPokemon() {
  const num = Math.floor((Math.random() * 1028) + 1)
  return num
}


function App() {
  const [pokemon, setPokemon] = useState(null)
  const [banList, setBanList] = useState([])
  const [history, setHistory] = useState([])
  const [randomMoveIndex, setRandomMoveIndex] = useState(null)

  const fetchPokemon = async () => {
    const query = `https://pokeapi.co/api/v2/pokemon/${generateRandomPokemon()}`
    const response = await axios.get(query)

    const randomMoveIndex = Math.floor(Math.random() * response.data.moves.length)
    const isBanned = response.data.types.some((typeObj) => banList.includes(typeObj.type.name)) ||
      response.data.abilities.some((abilityObj) => banList.includes(abilityObj.ability.name)) ||
      banList.includes(response.data.moves[randomMoveIndex].move.name)

    if(isBanned) {
      fetchPokemon()
    }
    else {
    // setting the Pokemon as the whole response
      setPokemon(response.data)
      setRandomMoveIndex(randomMoveIndex)
    }
  }

  return (
    <>
      <div className="layout">
        <PokeDisplay
          pokemon={pokemon}
          fetchPokemon={fetchPokemon}
          banList={banList}
          setBanList={setBanList}
          randomMoveIndex={randomMoveIndex}
        />

        <BanList banList={banList} setBanList={setBanList}/>
      </div>
    </>
  )
}

export default App
