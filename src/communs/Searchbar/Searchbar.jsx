import { Bouton } from "../../composants/Bouton/Bouton"
import { SearchbarItem } from "../../composants/SearchbarItem/SearchbarItem"
import './Searchbar.css'

export const Searchbar = () => {
    return (
        <container className="containerSearchbar">
            <div className="bouton">
                <Bouton text="Trouver une entreprise"/>
            </div>
            <div className="searchbaritem">
                <SearchbarItem placeholder="Recherche"/>
            </div>
        </container>
    )
}