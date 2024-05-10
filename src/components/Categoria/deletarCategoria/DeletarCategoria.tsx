import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { buscar,deletar } from '../../../service/Service'
import Categoria from '../../../model/Categoria'





function DeletarCategoria() {

    const [categorias, setCategoria] = useState<Categoria>({} as Categoria);

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>() 
    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        }
        catch (error: any) {
            console.log(error)
        }
    }
    
    
    
    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id) 
        }
    }, [id])
    
    function retornar() {
        navigate("/categorias")
    }
    
    
    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`)
            alert("REMOVIDO COM SUCESSO! ")
        } catch (error :any) {
            console.log(error)
        }
    
        retornar()
    }
    



    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

            <div className='border flex flex-col  overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-blue-200 text-black font-bold text-2xl'>Categoria</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'> Nome : {categorias.nome}</p>
                <p className='p-8 text-3xl bg-slate-200 h-full'> Descricao : {categorias.descricao}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarCategoria} >
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria