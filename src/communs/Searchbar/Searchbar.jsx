
import { Bouton } from "../../composants/Bouton/Bouton"
import { SearchbarItem } from "../../composants/SearchbarItem/SearchbarItem"

import "./Searchbar.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Searchbar = (props) => {
  const [motClef, setMotClef] = useState("");
  const navigation = useNavigate();

  const fonctionRecherche = () => {
    navigation(`/recherche/${motClef}`);
  };

  return (
    <div className="Searchbar">
      <div className="searchVisual">
        <input
          className="SearchText"
          type="search"
          id="searchbaritem"
          placeholder={props.placeholder}
          onChange={(evenement) => setMotClef(evenement.target.value)}
        />

        <button className="SearchButton">
          <Icon
            className="icon"
            icon="ph:magnifying-glass-bold"
            color="white"
            onClick={fonctionRecherche}
          />
        </button>
      </div>
    </div>
  );
};
