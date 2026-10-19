import './App.css';
import img2 from './images/rick-morty.png'
import { useState } from 'react';
import Characters from './components/Characters';
import  {CharactersService} from './services/CharactersService';
function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {

    const apiService = new CharactersService('https://rickandmortyapi.com/api');
    var results = await apiService.obtenerTodos();

    setCharacters(results);
    let  pinta = false;
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick y Morty</h1>
{
  characters ? (

        <Characters characters={characters} setCharacters={setCharacters} />

  ) : (
    <>    <img src={img2} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} class="btn-search">Ver Personajes</button>
</>

  )
}



      </header>
    </div>
  );
};


export default App;
