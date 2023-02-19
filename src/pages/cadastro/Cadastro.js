import React from 'react'
import dog from '../assets/dog.png'
import { Header } from '../../components/header/Header.js'

const Cadastro = () => {
  return (
    <div className='container-fluid h-100 bg-primary'>
      <Header></Header>
      <div className='row text-center'>
        <div className='col-3'></div>
        <div className='col-3 text-right my-auto'>
            <img src={dog} alt="logo do cachorro" className='img-fluid' style={{width: 550}}></img>
          </div>        
          <div className='col-6'>
            <div className='box col-8'>
              <h2 className='text-center'>Falta pouco para o seu pet ser feliz</h2>
              <br/>
              <br/>
              <input type="text" className='form-control form-control-lg mb-3' placeholder='Nome Completo'></input>
              <input type="text" className='form-control form-control-lg mb-3' placeholder='CPF'></input>
              <input type="email" className='form-control form-control-lg mb-3' placeholder='E-mail'></input>
              <input type="tel" className='form-control form-control-lg mb-3' placeholder='Telefone com DDD'></input>
              <input type="date" className='form-control form-control-lg mb-3' placeholder='Data de Nascimento'></input>

              <button className="btn btn-lg btn-block btn-secondary">Finalizar Cadastro</button>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Cadastro