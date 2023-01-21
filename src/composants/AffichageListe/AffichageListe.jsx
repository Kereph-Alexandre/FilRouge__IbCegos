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
          <span onClick={props.triTitre}>
            {props.titreCroissant ? (
              <Icon
                icon="material-symbols:arrow-drop-down-rounded"
                width="50"
                height="50"
              />
            ) : (
              <Icon
                icon="material-symbols:arrow-drop-up-rounded"
                width="50"
                height="50"
              />
            )}
          </span>
        </span>
        <span>
          Catégorie
          <span onClick={props.triCategorie}>
            {props.categorieCroissante ? (
              <Icon
                icon="material-symbols:arrow-drop-down-rounded"
                width="50"
                height="50"
              />
            ) : (
              <Icon
                icon="material-symbols:arrow-drop-up-rounded"
                width="50"
                height="50"
              />
            )}
          </span>
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
