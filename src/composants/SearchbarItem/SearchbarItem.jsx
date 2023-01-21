import "./SearchbarItem.css";
import { Icon } from "@iconify/react";

export const SearchbarItem = (props) => {
  const changementValeur = (evenement) => {
    props.changementMotClef(evenement.target.value);
  };
  return (
    <>
      <div className="Searchbar">
        <input
          className="SearchText"
          type="search"
          id="searchbaritem"
          placeholder={props.placeholder}
          onChange={changementValeur}></input>
        <button className="SearchButton" type="submit">
          <Icon icon="ph:magnifying-glass-bold" color="white" />
        </button>
      </div>
    </>
  );
};
