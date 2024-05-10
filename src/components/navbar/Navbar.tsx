import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
 
  

  return (
    
     <div className='flex justify-center bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 text-white'>
      <div className="container flex justify-between text-lg">
            <Link to='/' className='text-2xl font-bold uppercase text-white'>Farmacia</Link>

            <div className='flex gap-4'>
              <h3 className='font-medium'>Produtos</h3>
              <Link to={"/categorias"} className='hover:underline text-white'>Categorias</Link>
              <Link to={"/cadastroCategoria"} className='hover:underline text-white'>Cadastrar Categoria</Link>
            </div>
          </div>
        </div>
  )
}

export default Navbar