import React from 'react'
import { Header } from '../../components/header/Header'
import Card from '../../components/product/card/Card'
import './styles.css'


const Petshop = () => {
    return (
        <div className='h-100'>
            <Header></Header>
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <img alt="logo da petlove" src='https://dashboard.clubevantagens.com.br/wp-content/uploads/listing-uploads/logo/2022/10/petlove_clubevantagens_logo.jpg' className='img-fluid petshop-image'></img>
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
                            <label className='badge badge-primary'>Frete Grátis</label>
                        </div>
                    </div>
                    <div className='col-10'>
                        <h5> Produtos </h5>
                        <br></br>
                        <div className='row'>
                            {[1,2,3,4,5,6,7,8,9].map(p => <Card></Card>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Petshop