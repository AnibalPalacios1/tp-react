
import CardItem from "./CardItem";
import PropTipes from "prop-types";


function CardContainer({ cards }) {
  return (

     <div>  
        <h2> Productos</h2>
        <div className="card-container">  
          {cards.map((card, index) => (
          <CardItem
            key={index}
            imageAlt={card.imageAlt}
            image={card.image}
            title={card.title}
            description={card.description}
            buttonTitle={card.buttonTitle} />
                
          ))}
        
        </div>
      </div>
       
)
}

CardContainer.propTypes = {
  cards: PropTipes.arrayOf(
    PropTipes.shape({
      image: PropTipes.string,
      title: PropTipes.string,
      description: PropTipes.string,
      buttonTitle: PropTipes.string,
      imageAlt: PropTipes.string,
    })
  ),
};

export default CardContainer
