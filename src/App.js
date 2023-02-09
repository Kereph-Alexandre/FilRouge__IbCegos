import "./App.css";
import { Header } from "./communs/header/header";
import { Router } from "./routes/routes";
import { Footer } from "./communs/Footer/Footer";
import { ScrollToTop } from "./routes/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
