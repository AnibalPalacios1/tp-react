import { galerie } from "../data/data"
import GaleriaItem from "./GaleriaItem"
function GaleriaContainer() {
 
  return (
    <div>

    <h2> Galeria</h2>
    <div className="galeria-container">  
      
      {galerie.map((galery, index) => (
          <GaleriaItem
            key={index}
            imageAlt={galery.imageAlt}
            image={galery.image} />
          ))}
      
    </div>
    
    </div>
  )
}

export default GaleriaContainer
