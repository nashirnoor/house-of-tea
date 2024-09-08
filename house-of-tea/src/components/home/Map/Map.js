import React from 'react'
import mapPlane from '../../../assets/maps/plane.png'
import locationIcon from '../../../assets/maps/location-icon.svg'
import './Map.css'
function Map() {

    const stores = {
        muaither: {
            link: `https://maps.google.com/?q=25.294244456018994, 51.40628477528957`,
            latitude: 25.295269686055743,
            longitude: 51.407329540958074,
        },
        thummam: {
            link: `https://maps.google.com/?q=25.223198511126594,51.550737566976615`,
            latitude: 25.223198511126594,
            longitude: 51.550737566976615,
        },
        wakrah: {
            link: `https://maps.google.com/?q=25.18768586365982,51.59176834986675`,
            latitude: 25.18768586365982,
            longitude: 51.59176834986675,
        },
        aziziya: {
            link: `https://maps.google.com/?q=25.242423543157976,51.445581911144295`,
            latitude:25.242423543157976,
            longitude: 51.445581911144295,
        },
        markhiya: {
            link: `https://maps.google.com/?q=25.334634626154354,51.49219992637035`,
            latitude: 25.334634626154354,
            longitude: 51.49219992637035,
        },
        alkhor: {
            link: `https://maps.google.com/?q=25.677276691025067, 51.49961055615182`,
            latitude: 25.677871049539338,
            longitude: 51.499886543890824
        },
        lekhdaira: {
            link: `https://maps.google.com/?q=25.848044483965282, 51.35018905664213`,
            latitude: 25.8485658540304,
            longitude: 51.35033394395309,
        },
        zubara: {
            link: `https://maps.google.com/?q=25.822356695807937, 51.34916372295754`,
            latitude: 25.82621246701662,
            longitude: 51.350362474361766,
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