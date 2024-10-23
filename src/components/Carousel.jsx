import PropTypes from "prop-types";
import CarouselItem from "./CarouselItem";

function Carousel({ slides }) {
  return (
    <>  
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {slides.map((slide, index) => (
          <CarouselItem
            active={index === 0}
            key={index}
            imageAlt={slide.alt}
            imageSrc={slide.image}
          />
      ))}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  
  </div>
    <hr/>
    </>
  );
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      
    })
  ).isRequired,
};

export default Carousel;
