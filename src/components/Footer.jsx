import { imageWhatsapp, imageinstagram, instagram, whatsapp } from "../data/data"

function Footer() {
 
  return (
  <footer>  
  

      <h5> Nuestras vias de Contacto</h5>
      <div>
     
        
        <i> <img src={imageinstagram}  alt="instangram" /></i>
        <span> {instagram} </span>
        
      </div>
      <div>
        <i> <img src={imageWhatsapp} alt="whatsapp" /></i>
        <span> {whatsapp} </span>
      </div>
       <hr/>
       <span> Sitio desarrollado por AP Sistemas</span>
      
    
    </footer>
  )
}

export default Footer
