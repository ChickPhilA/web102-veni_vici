import '../App.css'


const PokeDisplay = ({pokemon, fetchPokemon, banList, setBanList, randomMoveIndex}) => {

    const typeEmojis = {
        fire: '🔥', water: '💧', grass: '🌿', electric: '⚡️',
        ice: '❄️', fighting: '🥊', poison: '☠️', ground: '🌍',
        flying: '🌬️', psychic: '🔮', bug: '🐛', rock: '🪨',
        ghost: '👻', dragon: '🐉', dark: '🌑', steel: '⚙️',
        fairy: '🧚', normal: '⭐'
    }

    const banAttribute = (attribute) => {

        if(!banList.includes(attribute)) {
            setBanList([...banList, attribute])   
        }
    }

    const matchType = (type) => `${type} ${typeEmojis[type] ?? '❓'}`

    const checkHiddenAbility = (ability) => {
        const hidden_emoji = ability.is_hidden ? ' 🤫' : ''
        return ability.ability.name + hidden_emoji
    }

    const removeDashMove = (moveObj) => {
        return moveObj.replaceAll('-', ' ')
    }

    const removeDashAbility = (abilityName) => {
        return abilityName.replaceAll('-', ' ')
    }

    const removeDashFromName = (pokemonName) => {
        return pokemonName.replaceAll('-', ' ')
    }

    return (
        <>
            <div className="container">
                <h1> Poké Discovery </h1>
                <h2> Let us discover the world of Pokémon!</h2>
                <h2> Click the button below to generate one Pokémon out of all 1028, from the National Pokédex!</h2>
                <h5> Attributes such as type(s), abilities, and a random move from the Pokémon's moveset will be displayed below.
                    Click on an attribute to add it to a ban list, where a Pokémon with those attirbutes will not be generated.
                </h5>
                    <div className="pokemon-display">
                        {/* This is the container where we'll place our Pokemon API */}
                        {pokemon ?
                                <div>
                                    <img src={pokemon.sprites.front_default}></img>
                                    <h2 id="name"> {removeDashFromName(pokemon.name)} </h2>
                                    <div>
                                            {pokemon.types.map((typeObj, index) => (
                                                    <button onClick={() => {
                                                        banAttribute(typeObj.type.name)
                                                    }} 
                                                    key={typeObj.type.name} className="attribute-btn"> 
                                                        {matchType(typeObj.type.name)} 
                                                    </button>
                                                )
                                            )}

                                        {pokemon.abilities.map((abilityObj, index) => (
                                                <button onClick={() => {
                                                    banAttribute(abilityObj.ability.name)
                                                }} key={abilityObj.ability.name} className="attribute-btn">
                                                    {removeDashAbility(checkHiddenAbility(abilityObj))} 🧠
                                                </button>
                                            )
                                        )}

                                        <button onClick={() => 
                                                banAttribute(pokemon.moves[randomMoveIndex].move.name)
                                         } className="attribute-btn"> 
                                                {removeDashMove(pokemon.moves[randomMoveIndex].move.name)} 💥
                                        </button>

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