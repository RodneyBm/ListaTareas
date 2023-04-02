import './App.css';
import ListaTareas from './Componentes/ListaTareas';


function App() {
  return (
    <div className="App">
      <div className='titulo'>
        <h1>Aplicación de Tareas</h1>
      </div>
      <div className='tareas-lista-principal'>
        <h1 className='titulo-tareas'>Mis Tareas</h1>
        
       <ListaTareas/>
      </div>
    </div>
  );
}

export default App;
