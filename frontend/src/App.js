// Importa el logo de la aplicación desde el archivo logo.svg
import logo from './logo.svg';
// Importa los estilos CSS de la aplicación desde el archivo App.css
import './App.css';
// Importa el componente ShowProduct desde el archivo product/ShowProduct
import CompShowProduct from './product/ShowProduct';
// Importa componentes de react-router-dom para la navegación
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Importa el componente CreateProduct desde el archivo product/CreateProduct
import CompCreateProduct from './product/CreateProduct';
// Importa el componente EditProduct desde el archivo product/EditProduct
import CompEditProduct from './product/EditProduct';

// Define el componente principal de la aplicación
function App() {
  return (
    <div className="App">
      {/* Encabezado de la aplicación */}
      <header className="App-header">
        {/* Imagen del logo */}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* Configuración del enrutamiento */}
      <BrowserRouter>
        <Routes>
          {/* Ruta raíz que renderiza el componente CompShowProduct */}
          <Route path='/' element={<CompShowProduct />} />
          {/* Ruta para crear un nuevo producto que renderiza el componente CompCreateProduct */}
          <Route path='/create' element={<CompCreateProduct />} />
          {/* Ruta para editar un producto existente que renderiza el componente CompEditProduct */}
          <Route path='/update' element={<CompEditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Exporta el componente App para que pueda ser utilizado en otras partes de la aplicación
export default App;
