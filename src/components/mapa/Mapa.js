import './styles.css'

import React from 'react'

const Mapa = () => {
    return (
        <li className='petshop d-inline-block'>
            <div className='d-inline-block'>
                <img alt="logo da petlove" src='https://dashboard.clubevantagens.com.br/wp-content/uploads/listing-uploads/logo/2022/10/petlove_clubevantagens_logo.jpg' className='img-fluid'></img>
            </div>
            <div className='d-inline-block ps-4 align-bottom'>
                <b>Petlove</b>
                <div className='petshop-infos'>
                    <span className="mdi mdi-star"></span>
                    <text>
                        <b>2,8</b>
                    </text>
                    <span className="mdi mdi-cash-usd-outline"></span>
                    <text>$$$</text>
                    <span className="mdi mdi-crosshairs-gps"></span>
                    <text>2,9 km</text>
                </div>
                <label className='badge badge-primary'>Frete Grátis</label>
            </div>
        </li>
    )
}

export default Mapa