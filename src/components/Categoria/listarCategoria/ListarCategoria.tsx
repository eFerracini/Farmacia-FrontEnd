import { useEffect, useState } from "react";
import Categoria from "../../../model/Categoria";
import { useNavigate } from "react-router-dom";
import { Oval } from 'react-loader-spinner'
import CardCategorias from "../cardCategoria/CardCategoria";
import { buscar } from "../../../service/Service";


function ListarCategoria() {

  const [categorias, setCategorias] = useState<Categoria[]>([]);


  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias)
    }
    catch (err: any) {
      console.log(err.toString());
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])


  return (

    <>
      {categorias.length === 0 && (
        <div className="">
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>

      )}

      <div className="flex justify-center w-full my-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full m-12">

          {
            categorias.map((itemCategoria) => (
              <>
                <CardCategorias key={itemCategoria.id} categoria={itemCategoria} />
              </>
            ))
          }
        </div>

      </div>


    </>
  );
}

export default ListarCategoria;