import { Bouton } from "../../composants/Bouton/Bouton";
import { SearchbarItem } from "../../composants/SearchbarItem/SearchbarItem";
import "./Searchbar.css";

export const Searchbar = (props) => {
  return (
    <span className="containerSearchbar">
      <div className="bouton">
        <Bouton text="Trouver une entreprise" />
      </div>
      <div className="searchbaritem">
        <SearchbarItem
          changementMotClef={props.changementMotClef}
          placeholder="Recherche"
        />
      </div>
    </span>
  );
};
