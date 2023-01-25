export default class PrestationService {
  static getPrestations() {
    return fetch("http://localhost:3004/prestations/").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }
  static getPrestation(id) {
    return fetch(`http://localhost:3004/prestations/${id}`).then((response) =>
      response
        .json()
        .then((data) => (this.empty(data) ? null : data))
        .catch((error) => this.error(error))
    );
  }

  static creationPrestation(prestation) {
    return fetch(`http://localhost:3004/prestations/`, {
      method: "POST",
      body: JSON.stringify(prestation),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static miseAJourPrestation(prestation) {
    return fetch(`http://localhost:3004/prestations/${prestation.id}`, {
      method: "PUT",
      body: JSON.stringify(prestation),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static supprimerPrestation(prestation) {
    return fetch(`http://localhost:3004/prestations/${prestation.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static empty(data) {
    return Object.keys(data).length === 0;
  }

  static error(error) {
    console.error(error);
  }
}
