import React from 'react'
import mapPlane from '../../../assets/maps/plane.png'
import mapPointed from '../../../assets/maps/pointed.jpeg'

function Map() {
    const Links={
        muaithar:"https://www.google.com/maps/place/HOUSE+OF+TEA/@25.355373,50.6600526,9z/data=!4m10!1m2!2m1!1sHOUSE+OF+TEA+Muaithar!3m6!1s0x3e45d939182cdc47:0x399fd199a76007df!8m2!3d25.293401!4d51.4070046!15sChVIT1VTRSBPRiBURUEgTXVhaXRoYXJaFyIVaG91c2Ugb2YgdGVhIG11YWl0aGFykgEKcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOWE1VOUxWaTEzUlJBQuABAA!16s%2Fg%2F11c52qwy_q?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
        thummam:'https://maps.app.goo.gl/jsgAMSbS9ipAPR1C6',
        wakrah:'https://maps.app.goo.gl/jsgAMSbS9ipAPR1C6',
        aziziya:'https://maps.app.goo.gl/jsgAMSbS9ipAPR1C6',
        markhiya:'https://maps.app.goo.gl/jsgAMSbS9ipAPR1C6',
        alkhor:'https://maps.app.goo.gl/jsgAMSbS9ipAPR1C6',
        lekhdaira:'https://maps.app.goo.gl/jsgAMSbS9ipAPR1C6',
        zubara:'https://maps.app.goo.gl/jsgAMSbS9ipAPR1C6',
        

    }
    return (
      <svg width="100%"  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <image href={mapPlane} x="0" y="0" width="100%" height="100%" />

  

    <circle cx="640" cy="600" r="10" fill="red" style={{cursor:'pointer'}} onClick={()=> window.open(Links.thummam, "_blank")} />
    <text x="590" y="600" fill="black" font-size="12" font-weight="bold" style={{cursor:'pointer'}} onClick={()=> window.open(Links.thummam, "_blank")} >Thumama</text>


  
    <circle cx="650" cy="540" r="10" fill="red" style={{cursor:'pointer'}} onClick={()=>window.open(Links.muaithar,'_blank')}/>
    <text x="640" y="540" fill="black" font-size="12" font-weight="bold" style={{cursor:'pointer'}}  onClick={()=>window.open(Links.muaithar,'_blank')}>Muaithar</text>
  


    <circle cx="620" cy="640" r="10" fill="red" style={{cursor:'pointer'}}  onClick={()=>window.open(Links.wakrah,'_blank')}/>
    <text x="590" y="630" fill="black" font-size="12" font-weight="bold" style={{cursor:'pointer'}}  onClick={()=>window.open(Links.wakrah,'_blank')}>Wakrah</text>
  

 
  
    <circle cx="630" cy="570" r="10" fill="red" style={{cursor:'pointer'}}  onClick={()=>window.open(Links.aziziya,'_blank')}/>
    <text x="620" y="560" fill="black" font-size="12" font-weight="bold" style={{cursor:'pointer'}}  onClick={()=>window.open(Links.aziziya,'_blank')}>Aziziya</text>
  

  
    <circle cx="680" cy="570" r="10" fill="red" style={{cursor:'pointer'}}  onClick={()=>window.open(Links.markhiya,'_blank')}/>
    <text x="670" y="560" fill="black" font-size="12" font-weight="bold" style={{cursor:'pointer'}}  onClick={()=>window.open(Links.markhiya,'_blank')}>Markhiya</text>
 

  
    <circle cx="820" cy="510" r="10" fill="red" style={{cursor:'pointer'}}  onClick={()=>window.open(Links.alkhor,'_blank')}/>
    <text x="820" y="510" fill="black" font-size="12" font-weight="bold" style={{cursor:'pointer'}}  onClick={()=>window.open(Links.alkhor,'_blank')}>Al Khor</text>
  

  
    <circle cx="850" cy="420" r="10" fill="red" style={{cursor:'pointer'}}  onClick={()=>window.open(Links.lekhdaira,'_blank')}/>
    <text x="850" y="420" fill="black" font-size="12" font-weight="bold" style={{cursor:'pointer'}}  onClick={()=>window.open(Links.lekhdaira,'_blank')}>Lekhdaira</text>

  
    <circle cx="800" cy="420" r="10" fill="red" style={{cursor:'pointer'}}  onClick={()=>window.open(Links.zubara,'_blank')}/>
    <text x="800" y="420" fill="black" font-size="12" font-weight="bold" style={{cursor:'pointer'}}  onClick={()=>window.open(Links.zubara,'_blank')}>Zubara</text>
  
</svg>


    





    )
}

export default Map