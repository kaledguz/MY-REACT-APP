// NavBar.jsx
import PropTypes from "prop-types";

function NavBar({
  handlePreviousPokemon,
  handleNextPokemon,
  pokemonIndex,
  pokemonList,
}) {
  return (
    <div>
      <button onClick={handlePreviousPokemon} disabled={pokemonIndex === 0}>
        Précédent
      </button>
      <button
        onClick={handleNextPokemon}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>
    </div>
  );
}

NavBar.propTypes = {
  handlePreviousPokemon: PropTypes.func.isRequired,
  handleNextPokemon: PropTypes.func.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  pokemonList: PropTypes.array.isRequired,
};

export default NavBar;
