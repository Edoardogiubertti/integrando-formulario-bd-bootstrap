import ifood from '../../assets/ifood.png'

import React from 'react'

export const Header = () => {
  return (
    <div className='col-12'>
        <header className='py-4 px-4 text-center'>
            <img src={ifood} alt="logo do ifood" className='img-fluid' style={{height: 160}}></img>
        </header>
    </div>
  )
}



