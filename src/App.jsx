import { useState } from 'react'
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


  const fetchPokemon = async () => {
    const query = `https://pokeapi.co/api/v2/pokemon/${generateRandomPokemon()}`
    const data = await axios.get(query)
  }



  return (
    <>
      <div>
        
      </div>
    </>
  )
}

export default App
