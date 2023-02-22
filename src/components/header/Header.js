import ifood from '../../assets/ifood.png'
import './styles.css'

import React from 'react'

export const Header = ({ hideCart }) => {

  const openDrawer = () => {
    const event = new CustomEvent('openCart')
    window.dispatchEvent(event)
  }

  return (
    <div className='col-12'>
      <header className='py-4 px-4 text-center'>
        <img src={ifood} alt="logo do ifood" className='img-fluid' style={{ height: 160 }}></img>
      </header>
      {!hideCart && (<button onClick={() => openDrawer()} className='btn btn-secondary cart-button'>
        <span className='mdi mdi-cart'></span> 2 Itens
      </button>)}
    </div>
  )
}



