import React from 'react'
import { Header } from '../../components/header/Header'
import './styles.css'
import Product from '../../components/product/list'

const Checkout = () => {
  return (
    <div className='h-100'>
        <Header></Header>
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6'>
                    <span className='section-title'> Dados de Entrega </span>
                    <div className='row mb-3'>
                        <div className='col-12'>
                            <input type="text" placeholder='CEP' className='form-control form-control-lg'></input>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-8 pl-0'>
                            <input type="text" placeholder='Endereço' className='form-control form-control-lg'></input>
                        </div>
                        <div className='col-4 pl-0'>
                            <input type="text" placeholder='Número' className='form-control form-control-lg'></input>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-8 pl-0'>
                            <input type="text" placeholder='Cidade' className='form-control form-control-lg'></input>
                        </div>
                        <div className='col-4 pl-0'>
                            <input type="text" placeholder='UF' className='form-control form-control-lg'></input>
                        </div>
                    </div>
                    <span className='section-title'> Dados de Pagamento </span>
                    <div className='row mb-3'>
                        <div className='col-12'>
                            <input type="text" placeholder='Nome no Titular' className='form-control form-control-lg'></input>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-12'>
                            <input type="text" placeholder='Nº do cartão' className='form-control form-control-lg'></input>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-8 pl-0'>
                            <input type="text" placeholder='CPF' className='form-control form-control-lg'></input>
                        </div>
                        <div className='col-4 pl-0'>
                            <input type="text" placeholder='CCV' className='form-control form-control-lg'></input>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-12  d-flex justify-content-between align-items-center'>
                            <b>Total</b>
                            <h5>R$ 30,00</h5>
                        </div>
                        <div className='col-12' >
                            <button className='btn btn-block btn-lg btn-primary'>Finalizar Compra</button>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='box col mb-4 box-sidebar'>
                        <h5>Minha Sacola</h5>
                        <div className='row products'>
                            {[1,2,3,4,5,6,7,8,9].map((p) => (
                                <Product></Product>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout