import './LiensFooter.css'

/**
 * Pour afficher les liens dans le footer
 * @param {{href:string, text:string}} props 
 * @returns un lien
 */
export const LiensFooter = (props) => {
    return (
        <a className="liensFooter" href={props.href}>{props.text}</a>
    )
}