import { useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import FoundPokemon from './components/FoundPokemon/FoundPokemon';

function App() {
  const [foundPokemon, setFoundPokemon] = useState(null);
  const [favPokemonsList, setFavPokemonsList] = useState([]);

  const addToFavorite = () => {
    if (!foundPokemon) return alert('No pokemon!');
    setFavPokemonsList([...favPokemonsList, {...foundPokemon}])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Concluding React 🤠</h1>
        <Searchbar setFoundPokemon={setFoundPokemon} />
        <FoundPokemon foundPokemon={foundPokemon} addToFavorite={addToFavorite}/>
      </header>
    </div>
  );
}

export default App;
