import './App.css';
import NavBar from './components/NavBar';

function App() {
  let styleH1 = {
    color: "gray",
    backgroundColor: "pink",
    marginTop: "100px",
  }

  let title = "Creando una Barra de Navegación";
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1 style={styleH1}>{title}</h1>
      </header>
    </div>
  );
}

export default App;
