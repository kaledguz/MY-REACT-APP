import PropTypes from "prop-types";

function NavBar({ pokemonList, handlePokemonChange }) {
  const handleClick = (index) => {
    handlePokemonChange(index);
  };

  const handlePikachuAlert = () => {
    const selectedPokemon = pokemonList.find(
      (pokemon) => pokemon.name === "pikachu"
    );
    if (selectedPokemon) {
      alert("pika pikachu !!!");
    }
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          key={index}
          onClick={() => {
            handleClick(index);
            handlePikachuAlert();
          }}
        >
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
