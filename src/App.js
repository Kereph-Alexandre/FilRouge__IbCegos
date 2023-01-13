import "./App.css";
import { CartePresentation } from "./composants/cartePrestation/cartePresentation";

function App() {
  return (
    <>
      <CartePresentation
        urlImagePrestation={
          "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        lienPrestation="#/"
        titrePrestation="Monsieur bricolage"
      />
    </>
  );
}

export default App;
