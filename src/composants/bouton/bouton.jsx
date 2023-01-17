import "./bouton.css";

/**
 * Composant bouton
 * @param {{text:string}} props
 * @returns un bouton CTA, avec une fonction propre et un texte spécifique
 */
export const Bouton = (props) => {
  return (
    <button className="boutonAction" clic={props.clic}>
      {props.texte}
    </button>
  );
};
