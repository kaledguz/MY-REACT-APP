// NavBar.jsx
import PropTypes from "prop-types";

function NavBar({ pokemonList, handlePokemonChange }) {
  const handleClick = (index) => {
    handlePokemonChange(index);
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  handlePokemonChange: PropTypes.func.isRequired,
};

export default NavBar;
