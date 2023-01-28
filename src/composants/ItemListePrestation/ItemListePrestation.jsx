import { Chip, Rating } from "@mui/material";
import "./ItemListePrestation.css";

export const ItemListePrestation = (props) => {
  return (
    <section className="itemListePrestation">
      <img
        className="illustrationListePrestation"
        src={props.img}
        alt={props.titre}
      />
      <div className="informationListePrestation">
        <div className="enteteItemListe">
          <span className="titreListePrestation">{props.titre}</span>
          <Rating
            className="noteListePrestation"
            value={props.note}
            readOnly></Rating>
        </div>
        <div className="secondeLigneEntete">
          <span className="localisationListePrestation">
            {props.localisation}
          </span>
          <span>
            <Chip
              className="chipListePrestation"
              label={props.categorie}></Chip>
          </span>
        </div>
        <p className="descriptionListePrestation">{props.description}</p>
      </div>
    </section>
  );
};
