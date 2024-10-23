import PropTypes from "prop-types";

function CardItem( 
  { image,
    imageAlt,
    title,
    description,
    buttonTitle }) {
  return (
    <div>
       <img src={image} className="card-img" alt={imageAlt} />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
             <a href="#" className="btn">{buttonTitle}</a>
        </div>
        </div>  
    
  )
}

CardItem.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
}
export default CardItem
