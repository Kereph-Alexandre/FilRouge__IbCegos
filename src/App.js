import "./App.css";
import { Header } from "./communs/header/header";
import { Router } from "./routes/routes";
import { Footer } from "./communs/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
