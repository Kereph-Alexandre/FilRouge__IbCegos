import { Link } from "react-router-dom";
import "./AffichageListe.css";
import { Icon } from "@iconify/react";

import { ItemListePrestation } from "../ItemListePrestation/ItemListePrestation";

export const AffichageListe = (props) => {
  return (
    <>
      <section className="rappelRecherche">
        Résultats pour la recherche : "{props.motclef}"
      </section>
      <section className="optionTri">
        <span>Trier : </span>
        <span>
          A-Z
          <Icon
            icon="material-symbols:arrow-drop-up-rounded"
            width="50"
            height="50"
          />
          <Icon
            icon="material-symbols:arrow-drop-down-rounded"
            width="50"
            height="50"
          />
        </span>
        <span>
          Catégorie
          <Icon
            icon="material-symbols:arrow-drop-up-rounded"
            width="50"
            height="50"
          />
          <Icon
            icon="material-symbols:arrow-drop-down-rounded"
            width="50"
            height="50"
          />
        </span>
      </section>
      <main className="affichageListePrestation">
        {props.prestations.map((prestation) => (
          <Link key={prestation.id} to={`/FichePrestation/${prestation.id}`}>
            <ItemListePrestation key={prestation.id} {...prestation} />
          </Link>
        ))}
      </main>
    </>
  );
};
