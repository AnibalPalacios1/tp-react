import PropTypes from "prop-types"

function GaleriaItem(
  {image,
  imageAlt,
   }
) {
  return (
    <div>
       <div className="foto" style={{width: "18rem"}}>
          <img src={image} alt={imageAlt} />
      </div>

     
    </div>
  )
}

GaleriaItem.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired, 
}
export default GaleriaItem
