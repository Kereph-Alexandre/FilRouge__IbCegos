import { Accueil } from "../pages/Accueil";
import { useRoutes } from "react-router-dom";
import { FichePrestation } from "../composants/FichePrestation/FichePrestation";
import  AjoutPrestation  from "../composants/AjoutPrestation/AjoutPrestation";
import { FormulaireEntreprise } from "../composants/FormulaireEntreprise/FormulaireEntreprise";
import { Inscription } from "../pages/Inscription";
import { Connexion } from "../pages/Connexion";
import { Recherche } from "../pages/Recherche/Recherche";
export const Router = () => {
  const routes = [
    {
      path: "/",
      element: <Accueil />,
    },
    {
      path: "/FichePrestation/:id",
      element: <FichePrestation />,
    },
    {
      path: "/AjoutPrestation",
      element: <AjoutPrestation />,
    }
      path: "/EspaceEntreprise/",
      element: <FormulaireEntreprise />,
    },
    {
      path: "Inscription",
      element: <Inscription />,
    },
    {
      path: "/Connexion",
      element: <Connexion />,
    },
    {
      path: "/Recherche",
      element: <Recherche />,
    },
    {
      path: "/Recherche/:motClef",
      element: <Recherche />,
    },
    {
      path: "/AjoutPrestation",
      element: <AjoutPrestation />,
    }
  ];

  return <>{useRoutes(routes)}</>;
};
