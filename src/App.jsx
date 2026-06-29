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

  {/*
    I was thinking of the Pokémon class being like this:
    -Name (will be displayed below the photo)
    -Photo

    The actual attributes:
    -Type(s)
    -Abilities: [] 
    -A random move from its moveset
      -(Get the length, pick a random number, and access the first name)
  */}

  const fetchPokemon = async () => {
    const query = `https://pokeapi.co/api/v2/pokemon/${generateRandomPokemon()}`
    const response = await axios.get(query)

    // setting the Pokemon as the whole response
    setPokemon(response.data)
    setRandomMoveIndex(Math.floor(Math.random() * response.data.moves.length))
  }



  return (
    <>
      <div>
        <PokeDisplay
          pokemon={pokemon}
          fetchPokemon={fetchPokemon}
          banList={banList}
          setBanList={setBanList}
          randomMoveIndex={randomMoveIndex}
        />
      </div>
    </>
  )
}

export default App
