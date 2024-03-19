import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos" />
      <ItemCount
        initial={1}
        stock={10}
        onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
      />
    </>
  );
}

export default App;
