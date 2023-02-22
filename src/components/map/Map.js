import './styles.css'
import googleMapReact from 'google-map-react'

import React from 'react'

const Map = () => {
  return (
    <div className='container-map'>
        <googleMapReact 
            bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek' }} 
            center={{ lat: -23.561864, lng: -46.625378 }} 
            defaultZoom={15}>
        </googleMapReact>
    </div>
  )
}

export default Map