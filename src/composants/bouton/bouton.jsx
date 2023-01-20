import './Bouton.css'

/**
 * Bouton 
 * @param {{text:string}} props 
 * @returns un super bouton
 */
export const Bouton = (props) => {
    return (
        <button className="bouton" onClick={props.onClick}>
            {props.text}
        </button>
    )
}
