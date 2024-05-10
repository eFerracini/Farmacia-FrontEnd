import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

  function Footer() {
  
    return (
      <>
          <div className="flex justify-center bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 text-white">
            <div className="container flex flex-col items-center py-4">
              <p className='text-xl font-bold '>Farmacia</p>
              <p className='text-lg '>Acesse nossas redes sociais</p>
              <div className='flex gap-2'>
                <LinkedinLogo size={48} weight='bold' color='black'/>
                <InstagramLogo size={48} weight='bold' color='black' />
                <FacebookLogo size={48} weight='bold' color='black' />
              </div>
            </div>
          </div>
        </>
    )
  }
export default Footer