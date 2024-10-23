import PropTypes from "prop-types";

function CarouselItem({
  interval,
  imageSrc,
  imageAlt,
  
  active,
}) {
  return (
    <div
      className={`carousel-item ${active ? "active" : ""} `}
      data-bs-interval={interval}
    >
      <img src={imageSrc} className="d-block w-100" alt={imageAlt} />
    </div>
  );
}

CarouselItem.propTypes = {
  interval: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

CarouselItem.defaultProps = {
  interval: "5000",
};

export default CarouselItem;
