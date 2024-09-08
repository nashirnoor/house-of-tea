import React from 'react'
import mapPlane from '../../assets/maps/plane.png'
import locationIcon from '../../assets/maps/location-icon.svg'
import './Map.css'
function Map() {

    const stores = {
        muaither: {
            link: `https://maps.google.com/?q=25.29572332548531,51.407174985912846`,
            latitude: 25.29572332548531,
            longitude: 51.407174985912846,
        },
        thummam: {
            link: `https://maps.google.com/?q=25.222438996740422,51.550536562514615`,
            latitude: 25.222438996740422,
            longitude: 51.550536562514615,
        },
        wakrah: {
            link: `https://maps.google.com/?q=25.200882610390817,51.588306019650865`,
            latitude: 25.200882610390817,
            longitude: 51.588306019650865,
        },
        aziziya: {
            link: `https://maps.google.com/?q=25.245825444089515,51.446762153624036`,
            latitude:25.245825444089515,
            longitude: 51.446762153624036,
        },
        markhiya: {
            link: `https://maps.google.com/?q=25.338296672621958, 51.491324118099705`,
            latitude: 25.338296672621958,
            longitude: 51.491324118099705,
        },
        alkhor: {
            link: `https://maps.google.com/?q=25.67683018797721,51.50235561004744`,
            latitude: 25.67683018797721,
            longitude: 51.50235561004744
        },
        lekhdaira: {
            link: `https://maps.google.com/?q=25.84792563866012,51.350088871164644`,
            latitude: 25.84792563866012,
            longitude: 51.350088871164644,
        },
        zubara: {
            link: `https://maps.google.com/?q=25.825738803487717,51.34830822276559`,
            latitude: 25.825738803487717,
            longitude: 51.34830822276559,
        },


    }
    return (
        <svg width="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <image href={mapPlane} x="0" y="0" width="100%" height="100%" />


            <image className='location' href={locationIcon} x="630" y="590" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.thummam.link, "_blank")}></image>
            <text className='location' x="590" y="600" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.thummam.link, "_blank")} >Thumama</text>


            <image href={locationIcon} x="630" y="530" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.muaither.link, '_blank')}></image>
            <text x="640" y="540" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.muaither.link, '_blank')}>Muaither</text>


            <image href={locationIcon} x="610" y="630" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.wakrah.link, '_blank')}></image>
            <text x="590" y="630" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.wakrah.link, '_blank')}>Wakrah</text>



            <image href={locationIcon} x="620" y="560" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.aziziya.link, '_blank')}></image>

            <text x="620" y="560" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.aziziya.link, '_blank')}>Aziziya</text>


            <image href={locationIcon} x="670" y="560" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.markhiya.link, '_blank')}></image>

            <text x="670" y="560" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.markhiya.link, '_blank')}>Markhiya</text>

            <image href={locationIcon} x="810" y="500" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.alkhor.link, '_blank')}></image>

            <text x="820" y="510" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.alkhor.link, '_blank')}>Al Khor</text>


            <image href={locationIcon} x="840" y="410" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.lekhdaira.link, '_blank')}></image>
            <text x="850" y="420" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.lekhdaira.link, '_blank')}>Lekhdaira</text>

            <image href={locationIcon} x="790" y="410" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.zubara.link, '_blank')}></image>

            <text x="800" y="420" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.zubara.link, '_blank')}>Zubara</text>

        </svg>








    )
}

export default Map