import React from 'react'
import './styles.css'

const Product = () => {
    return (
        <div className='product-list col-12'>
            <div className='row'>
                <div className='col-3'>
                    <img alt="ração" src="https://www.petlove.com.br/images/products/266098/product/Ra%C3%A7%C3%A3o_Premier_Pet_Formula_Frango_C%C3%A3es_Adultos_Ra%C3%A7as_M%C3%A9dias_-_20_Kg_3108232-3_3.jpg?1674080715" className='img-fluid'></img>
                </div>
                <div className='col-6'>
                    <small>
                        <label className='badge badge-primary'>R$ 30,00</label>
                    </small>
                    <small>
                        <b>Nome do Produto</b>
                    </small>
                </div>
                <div className='col-3'>
                        <button className='btn btn-secondary rounded-circle'>-</button>
                </div>
            </div>
        </div>
    )
}

export default Product