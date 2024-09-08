import React from 'react'
import mapPlane from '../../../assets/maps/plane.png'
import locationIcon from '../../../assets/maps/location-icon.svg'
import './Map.css'
function Map() {
    const Links = {
        muaithar: "https://www.google.com/maps/place/HOUSE+OF+TEA/@25.355373,50.6600526,9z/data=!4m10!1m2!2m1!1sHOUSE+OF+TEA+Muaithar!3m6!1s0x3e45d939182cdc47:0x399fd199a76007df!8m2!3d25.293401!4d51.4070046!15sChVIT1VTRSBPRiBURUEgTXVhaXRoYXJaFyIVaG91c2Ugb2YgdGVhIG11YWl0aGFykgEKcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOWE1VOUxWaTEzUlJBQuABAA!16s%2Fg%2F11c52qwy_q?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
        thummam: 'https://maps.app.goo.gl/jsgAMSbS9ipAPR1C6',
        wakrah: 'https://maps.app.goo.gl/jsgAMSbS9ipAPR1C6',
        aziziya: 'https://maps.app.goo.gl/jsgAMSbS9ipAPR1C6',
        markhiya: 'https://maps.app.goo.gl/jsgAMSbS9ipAPR1C6',
        alkhor: 'https://maps.app.goo.gl/jsgAMSbS9ipAPR1C6',
        lekhdaira: 'https://maps.app.goo.gl/jsgAMSbS9ipAPR1C6',
        zubara: 'https://maps.app.goo.gl/jsgAMSbS9ipAPR1C6',


    }
    return (
        <svg width="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <image href={mapPlane} x="0" y="0" width="100%" height="100%" />


            <image className='location' href={locationIcon} x="630" y="590" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.thummam, "_blank")}></image>
            <text className='location' x="590" y="600" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.thummam, "_blank")} >Thumama</text>


            <image href={locationIcon} x="630" y="530" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.muaithar, '_blank')}></image>
            <text x="640" y="540" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.muaithar, '_blank')}>Muaithar</text>


            <image href={locationIcon} x="610" y="630" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.wakrah, '_blank')}></image>
            <text x="590" y="630" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.wakrah, '_blank')}>Wakrah</text>



            <image href={locationIcon} x="620" y="560" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.aziziya, '_blank')}></image>

            <text x="620" y="560" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.aziziya, '_blank')}>Aziziya</text>


            <image href={locationIcon} x="670" y="560" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.markhiya, '_blank')}></image>

            <text x="670" y="560" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.markhiya, '_blank')}>Markhiya</text>

            <image href={locationIcon} x="810" y="500" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.alkhor, '_blank')}></image>

            <text x="820" y="510" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.alkhor, '_blank')}>Al Khor</text>


            <image href={locationIcon} x="840" y="410" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.lekhdaira, '_blank')}></image>
            <text x="850" y="420" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.lekhdaira, '_blank')}>Lekhdaira</text>

            <image href={locationIcon} x="790" y="410" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.zubara, '_blank')}></image>

            <text x="800" y="420" fill="black" font-size="12" font-weight="bold" style={{ cursor: 'pointer' }} onClick={() => window.open(Links.zubara, '_blank')}>Zubara</text>

        </svg>








    )
}

export default Map