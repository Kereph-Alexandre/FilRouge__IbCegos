export default class PrestationModel {
  id;
  idEntreprise;
  img;
  titre;
  categorie;
  description;
  prestataire;
  tauxHoraire;
  localisation;
  datePublication;
  nombrePrestations;
  note;

  constructor(
    idEntreprise,
    img = "http://dummyimage.com/100x100.png/dddddd/000000",
    titre,
    categorie = "Non répertorié",
    description,
    tauxHoraire,
    localisation
  ) {
    this.idEntreprise = idEntreprise;
    this.img = img;
    this.titre = titre;
    this.categorie = categorie;
    this.description = description;
    this.tauxHoraire = tauxHoraire;
    this.localisation = localisation;

    // this prestataire = fonction recherche selon idEntreprise,
    // retour entreprise => entreprise.nom

    // ID géré par JSON server ?

    this.datePublication = new Date().toLocaleDateString(); // Lors de la création, on utilise la date du jour

    this.nombrePrestations = 0; // Forcément aucune prestation réalisée au moment de sa création

    this.note = 0; //L'idéal serait d'avoir "undefined" ou "null", mais 0 pour pas compliquer inutilement pour l'instant
  }
}
