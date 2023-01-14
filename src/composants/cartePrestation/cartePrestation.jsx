import "./cartePrestation.css";

/**
 * Composant Carte pour prestation (format grille)
 * @param {titre:string, img:string, id:number} props
 * @returns une carte affichant une prestation donnée avec son image, son titre et un lien menant vers une page de détails
 */
export const CartePrestation = (props) => {
  return (
    <div className="cartePrestation">
      <img src={props.img} alt="Illustration de la prestation" />

      <div className="corpsDeCarte">
        <div className="descriptionCarte">
          <h2>
            <a href={props.id}>{props.titre}</a>
          </h2>
        </div>
        <a href={props.id}>Voir Plus</a>
      </div>
    </div>
  );
};
