import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { cadastrar, buscar, atualizar } from '../../../service/Service';
import Categoria from '../../../model/Categoria';
import { RotatingLines } from 'react-loader-spinner';
function FormularioCategoria() {

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }


    // Parametros para editar
    const { id } = useParams<{ id: string }>()
    async function buscarPorId(id: string) {

        await buscar(`/categorias/${id}`, setCategoria);
    }
    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])



    async function cadastroEdicaoCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)
                alert("ATUALIZADO COM SUCESSO")
                retornar()
            }
            catch (error: any) {
                console.log(error)
                alert("ERRO AO ATUALIZAR")
            }


        }
        else {
            try {
                cadastrar(`/categorias`, categoria, setCategoria);
                alert("CADASTRO COM SUCESSO")
            } catch (error: any) {
                alert("ERRO AO CADASTRAR")
                console.log(error)
            }

            setIsLoading(false)
            retornar()
        }
    }


    function retornar() {
        navigate("/categorias")
    }




    return (
        <div className="container flex flex-col items-center justify-center mx-auto bg-blue-200 m-8 p-20">
            <h1 className="text-4xl text-center my-8 text-slate-500">
                {id === undefined ? 'CADASTRO DE CATEGORIA' : "EDIÇÃO DE CATEGORIA"}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={cadastroEdicaoCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className='text-2xl'>Nome da categoria</label>
                    <input
                        required
                        type="text"
                        name='nome'
                        value={categoria.nome}
                        className="border-2 border-slate-700 rounded p-2 mb-8 "
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

                    />
                    <label htmlFor="descricao" className='text-2xl'>Descricao da categoria</label>

                    <input
                        type="text"
                        name='descricao'
                        value={categoria.descricao}
                        className="border-2 border-slate-700 rounded p-2 "
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}

                    />

                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 p-4 mx-auto block mt-8"
                    type="submit">  {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span className='text-2xl'>Confirmar</span>
                    }
                </button>
            </form>
        </div>
    );

}

export default FormularioCategoria;