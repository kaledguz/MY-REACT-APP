// App.jsx
import { useState } from "react";
import MyTitle from "./components/MyTitle";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePokemonChange = (index) => {
    setPokemonIndex(index);
  };

  const selectedPokemon = pokemonList[pokemonIndex];

  return (
    <div>
      <MyTitle />
      <PokemonCard pokemon={selectedPokemon} />
      <NavBar
        handlePokemonChange={handlePokemonChange}
        pokemonList={pokemonList}
      />
    </div>
  );
}

export default App;
