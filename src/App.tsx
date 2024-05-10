import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ListarCategorias from './components/Categoria/listarCategoria/ListarCategoria'
import DeletarCategoria from './components/Categoria/deletarCategoria/DeletarCategoria'
import FormularioCategoria from './components/Categoria/formularioCategoria/FormularioCategoria'
import Home from './pages/home/Home'

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} /> 
            <Route path="/cadastroCategoria" element={<FormularioCategoria/>} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
          
          </Routes>
        </div>

        <Footer />

      </BrowserRouter>


    </>


  )
}

export default App
