import { Chip } from "@mui/material";
import { Bouton } from "../Bouton/Bouton";
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
          <div className="enteteCarte">
            <span className="titreCarte">{props.titre}</span>
            <span className="cartePrixPrestation">{props.tauxHoraire}/h</span>
          </div>
          <p className="texteDeCarte">{props.description}</p>
        </div>
        <div className="carteInformationsSupplementaires">
          <Chip label={props.categorie || "catégorie manquante"} />
          <Bouton text="Voir Plus" />
        </div>
      </div>
    </div>
  );
};
