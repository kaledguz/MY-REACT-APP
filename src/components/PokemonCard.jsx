import PropTypes from "prop-types";

export default PokemonCard;

function PokemonCard({ pokemon }) {
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

/* j'ai déclarer ici les propstypes car c'est la solution aux erreurs que l'extension lent m'affiche*/
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
