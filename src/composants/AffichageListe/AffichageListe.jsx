import { Link } from "react-router-dom";

import prestations from "../../donnees/donnesPrestation.json";
import { ItemListePrestation } from "../ItemListePrestation/ItemListePrestation";

export const AffichageListe = () => {
  return (
    <main className="affichageListePrestation">
      {prestations.map((prestation) => (
        <Link to={`/FichePrestation/${prestation.id}`}>
          <ItemListePrestation key={prestation.id} {...prestation} />
        </Link>
      ))}
    </main>
  );
};
