import logo from './logo.svg';
import './App.css';
import ContactoListaComponent from './Components/container/ComponenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoListaComponent></ContactoListaComponent>
      </header>
    </div>
  );
}

export default App;
