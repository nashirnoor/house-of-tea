import React from 'react'
import mapPlane from '../../assets/maps/plane.png'
import locationIcon from '../../assets/maps/location-icon.svg'
import './Map.css'

function Map() {

    const stores = {
        muaither: {
            link: `https://www.google.com/maps/place/HOUSE+OF+TEA/@25.3337375,51.4901546,1079m/data=!3m1!1e3!4m6!3m5!1s0x3e45dd17f6dfcd6b:0x6b7d799aab09e2c5!8m2!3d25.3336479!4d51.4921837!16s%2Fg%2F11t6mt4ycl?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D`,
        },
        thummam: {
            link: `https://www.google.com/maps/place/HOUSE+OF+TEA/@25.2226,51.5507095,884m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3e45cfdcfb9c799d:0x6cc3d882ff6d055f!8m2!3d25.2226!4d51.5507095!16s%2Fg%2F11fkz0r822?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D`,
        },
        wakrah: {
            link: `https://www.google.com/maps/place/HOUSE+OF+TEA/@25.1845386,51.5892688,1768m/data=!3m1!1e3!4m6!3m5!1s0x3e45cd5d11f22a7d:0xded525061287a9ee!8m2!3d25.1845338!4d51.5918437!16s%2Fg%2F11j378cx0_?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D`,
        },
        aziziya: {
            link: `https://www.google.com/maps/place/House+of+tea+Al+Aziziyah/@25.2879311,51.3671926,32619m/data=!3m1!1e3!4m7!3m6!1s0x3e45db52938f8b13:0xb94b9a4d57a3d87f!8m2!3d25.24226!4d51.4455618!15sChVob3VzZSBvZiB0ZWEgbXVhaXRoZXJaFyIVaG91c2Ugb2YgdGVhIG11YWl0aGVykgEEY2FmZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VST2MzRklSMlozRUFF4AEA!16s%2Fg%2F11vbxn820v?entry=tts&g_ep=EgoyMDI0MDkwNC4wKgBIAVAD`,
        },
        markhiya: {
            link: `https://www.google.com/maps/place/House+of+tea+Al+Aziziyah/@25.2879311,51.3671926,56540m/data=!3m1!1e3!4m6!3m5!1s0x3e45db52938f8b13:0xb94b9a4d57a3d87f!8m2!3d25.24226!4d51.4455618!16s%2Fg%2F11vbxn820v?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D`,
        },
        alkhor: {
            link: `https://maps.app.goo.gl/PN39LYAi6SFD2y2b8`,
        },
        lekhdaira: {
            link: `https://www.google.com/maps/place/HOUSE+OF+TEA/@25.8479617,51.3501151,63m/data=!3m1!1e3!4m6!3m5!1s0x3e4f4dc785bddc49:0x42c5f454f75a00a9!8m2!3d25.8479015!4d51.3500996!16s%2Fg%2F11q5843_12?entry=tts&g_ep=EgoyMDI0MDkwNC4wKgBIAVAD`,
        },
        zubara: {
            link: `https://www.google.com/maps/place/HOUSE+OF+TEA/@25.8223452,51.3491678,7036m/data=!3m1!1e3!4m6!3m5!1s0x3e4f53ad7d38383b:0x9f3a56c9b7ff5f85!8m2!3d25.8223452!4d51.3491678!16s%2Fg%2F11fzyhshwd?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D`,
        },
        citycentermall: {
            link: `https://www.google.com/maps/place/HOUSE+OF+TEA/@25.3246363,51.5313385,7065m/data=!3m1!1e3!4m6!3m5!1s0x3e45c55ba24c7c85:0x90b666b4335ba191!8m2!3d25.3246363!4d51.5313385!16s%2Fg%2F11j2xlzkcg?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D`,
        },
        sealine: {
            link: `https://www.google.com/maps/place/House+of+tea+%D8%A8%D9%8A%D8%AA+%D8%A7%D9%84%D8%B4%D8%A7%D9%8A%E2%80%AD/@24.8729218,51.5188095,4091m/data=!3m1!1e3!4m6!3m5!1s0x3e443b79e95b697d:0x9f689289f497abd7!8m2!3d24.8729218!4d51.5188095!16s%2Fg%2F11ptlkqcbt?sa=X&ved=1t:2428&ictx=111&entry=tts&g_ep=EgoyMDI0MDkwNC4wKgBIAVAD`,
        },
    }
    return (
    <svg width="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <image href={mapPlane} x="0" y="0" width="100%" height="100%" />
    
    <image className='location' href={locationIcon} x="630" y="590" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.thummam.link, "_blank")}></image>
    <text className='location' x="612" y="619" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.thummam.link, "_blank")} >Thumama</text>
    
    <image href={locationIcon} x="630" y="525" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.muaither.link, '_blank')}></image>
    <text x="620" y="550" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.muaither.link, '_blank')}>Muaither</text>
    
    <image href={locationIcon} x="610" y="630" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.wakrah.link, '_blank')}></image>
    <text x="602" y="658" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.wakrah.link, '_blank')}>Wakrah</text>
    
    <image href={locationIcon} x="620" y="556" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.aziziya.link, '_blank')}></image>
    <text x="610" y="585" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.aziziya.link, '_blank')}>Aziziya</text>
    
    <image href={locationIcon} x="670" y="560" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.markhiya.link, '_blank')}></image>
    <text x="670" y="585" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.markhiya.link, '_blank')}>Markhiya</text>
    
    <image href={locationIcon} x="810" y="500" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.alkhor.link, '_blank')}></image>
    <text x="810" y="525" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.alkhor.link, '_blank')}>Al Khor</text>
    
    <image href={locationIcon} x="840" y="410" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.lekhdaira.link, '_blank')}></image>
    <text x="828" y="441" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.lekhdaira.link, '_blank')}>Lekhdaira</text>
    
    <image href={locationIcon} x="790" y="410" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.zubara.link, '_blank')}></image>
    <text x="780" y="440" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.zubara.link, '_blank')}>Zubara</text>

    <image href={locationIcon} x="655" y="580" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.zubara.link, '_blank')}></image>
    <text x="665" y="610" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.zubara.link, '_blank')}>City Center Mall</text>

    <image href={locationIcon} x="527" y="661" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.zubara.link, '_blank')}></image>
    <text x="520" y="689" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(stores.zubara.link, '_blank')}>Sealine</text>
</svg>
    )
}

export default Map