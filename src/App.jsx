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

  {/*
    I was thinking of the Pokémon class being like this:
    -Name (will be displayed below the photo)
    -Photo

    The actual attributes:
    -Type(s)
    -Abilities: [] 
    -A random move from its moveset
  */}

  const fetchPokemon = async () => {
    const query = `https://pokeapi.co/api/v2/pokemon/${generateRandomPokemon()}`
    const response = await axios.get(query)
  }



  return (
    <>
      <div>
        <PokeDisplay />
      </div>
    </>
  )
}

export default App
