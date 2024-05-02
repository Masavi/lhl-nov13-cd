import { useState } from 'react';
import axios from 'axios';
import './searchbar.css';

const POKE_API = 'https://pokeapi.co/api/v2/pokemon/';

function Searchbar(props) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`${POKE_API}/${inputValue}`)
      .then((result) => {
        props.setFoundPokemon(result.data);
      })
      .catch(() => {
        props.setFoundPokemon(false);
      })
  }

  return (
    <form onSubmit={handleSubmit} className="searchbar-form">
      <label>Type the name of a Pokemon to search!</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
      <button type='submit'>Click to search!</button>
    </form>
  )
}

export default Searchbar;
