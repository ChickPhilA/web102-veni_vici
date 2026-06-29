import '../App.css'


const PokeDisplay = ({pokemon, fetchPokemon, banList, setBanList, randomMoveIndex}) => {

    const typeEmojis = {
        fire: '🔥', water: '💧', grass: '🌿', electric: '⚡️',
        ice: '❄️', fighting: '🥊', poison: '☠️', ground: '🌍',
        flying: '🌬️', psychic: '🔮', bug: '🐛', rock: '🪨',
        ghost: '👻', dragon: '🐉', dark: '🌑', steel: '⚙️',
        fairy: '🧚', normal: '⭐'
    }

    const matchType = (type) => `${type} ${typeEmojis[type] ?? '❓'}`

    const checkHiddenAbility = (ability) => {
        const hidden_emoji = ability.is_hidden ? ' 🤫' : ''
        return ability.ability.name + hidden_emoji
    }

    return (
        <>
            <div className="container">
                <h1> Poké Discovery </h1>
                <p> Let us discover the world of Pokémon!</p>
                <p> Click the button below to generate one Pokémon out of all 1028, from the National Pokédex!</p>
                    <div className="pokemon-display">
                        {/* This is the container where we'll place our Pokemon API */}
                        {pokemon ?
                                <div>
                                    <img src={pokemon.sprites.front_default}></img>
                                    <h2> {pokemon.name} </h2>
                                    <div>
                                        {pokemon.types.map((typeObj, index) => (
                                            <button key={typeObj.type.name} className="attribute-btn"> {matchType(typeObj.type.name)} </button>
                                            )
                                        )}

                                        {pokemon.abilities.map((abilityObj, index) => (
                                            <button key={abilityObj.ability.name} className="attribute-btn"> {checkHiddenAbility(abilityObj)} 🧠 </button>
                                            )
                                        )}

                                        <button className="attribute-btn"> {pokemon.moves[randomMoveIndex].move.name} 💥 </button>

                                    </div>
                                </div>
                                :
                            <p> Click on the 'Discover a Pokémon' button below! 🔎 </p>
                        }
                    </div>
                {/* This function will CALL the API */}
                <button className="generate-btn" onClick={fetchPokemon}>Discover a Pokémon! </button>
            </div>
        </>
    )
}

export default PokeDisplay