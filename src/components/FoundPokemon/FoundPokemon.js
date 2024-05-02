function FoundPokemon(props) {
  const { foundPokemon } = props;

  const renderFoundPokemon = () => {
    // return foundPokemon
    //   ? (<>
    //         <h2>{foundPokemon.name}</h2>
    //         <img src={foundPokemon.sprites.front_default} alt="" />
    //       </>)
    //   : <h2>Pokemon not found in PokeDex!</h2>
    if (foundPokemon === null) {
      return <h2>Type in the input above to search for a pokemon!</h2>
    }

    if (foundPokemon === false) {
      return <h2>Pokemon not found in PokeDex!</h2>
    }

    if (foundPokemon) {
      return (<>
          <h2>{foundPokemon.name}</h2>
          <img src={foundPokemon.sprites.front_default} alt="" />
        </>)
    }
  }

  return (
    <>
      { renderFoundPokemon() }
    </>
  )
}

export default FoundPokemon;
