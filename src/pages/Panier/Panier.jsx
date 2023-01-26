import './Panier.css'

export const Panier = () => {
    return (    
    <>
    <container className="panier">    
        <div className="panierPartieGauche">
            <div className="listePanier">
                <h1>Mon panier</h1>
                <div className="panierContenu">                
                    <img src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg"/>
                    <div className='panierContenuTexte'>                    
                        <p>18,99€</p>
                        <p>Montage de meubles</p>
                    </div>
                </div>
            </div>
            <div className="sousTotal">    
                <div className="sousTotalTitre">                                
                    <h1>Sous-total</h1>                
                </div>
                <div className="sousTotalSomme">                    
                    <p>18,99€</p>
                </div>
            </div>
        </div>
        <div className="panierPartieDroite">
            <h1>Total</h1>
            <p>18,99€</p>
        </div>
    </container>

    </>
    )

}