import React from 'react'
import './styles.css'

const Card = () => {
    return (
        <div className='product col-3'>
            <img src='https://www.petlove.com.br/images/products/266098/product/Ra%C3%A7%C3%A3o_Premier_Pet_Formula_Frango_C%C3%A3es_Adultos_Ra%C3%A7as_M%C3%A9dias_-_20_Kg_3108232-3_3.jpg?1674080715' className='img-fluid align-center'></img>
            <button className='btn btn-primary rounded-circle'>+</button>
            <h4>
                <label className='badge badge-primary'>R$ 40,00</label>
            </h4>
            <small>
                <b>Ração Premiere para cães de porte Médio</b>
            </small>
        </div>
    )
}

export default Card