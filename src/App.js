import SheCodesLogo from "./SheCodesLogo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={SheCodesLogo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Maryanne McGlone</small>
        </footer>
      </div>
    </div>
  );
}
