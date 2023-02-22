import './styles.css'

import React from 'react'
import { Header } from '../../components/header/Header'
import Mapa from '../../components/mapa/Mapa'
import Map from '../../components/map/Map'

const Home = () => {
  return (
    <div className='h-100'>
        <Header hideCart={false}></Header>
        <div className='container-fluid petshop-list-container'>
            <div className='col-12 px-4 text-center'>
                <h5>Mais próximos de você</h5>
            </div>
            <ul className='col-12 petshop-list'>
                {[1,2,3,4,5,6,7,8,9].map(p => <Mapa></Mapa>)}
            </ul>
        </div>
        <Map></Map>
    </div>
  )
}

export default Home