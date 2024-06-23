// Componentes
import Header from './components/Header';
import Perfil from './components/Perfil';
import Experiencia from './components/Experiencia';
import Formacao from './components/Formacao'
import Contato from './components/Contato';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Perfil/>
      <Experiencia/>
      <Formacao/>
      <Contato/>
    </div>
  );
}

export default App;
