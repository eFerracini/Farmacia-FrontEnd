import saude from '../../assets/saude.png'



function Home() {
    return (
        <>
        <div className="bg-cyan-200 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl text-black font-bold'>Seja bem vinde!</h2>
              <p className='text-xl text-black'>Aqui você encontra todo tipo de medicamento desejado</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver produtos</button>
              </div>
            </div>
            <div className="flex justify-center ">
              <img src={saude} alt="" className='w-2/3' />
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;