import React from 'react';
import "./Card.css"
const Card = ({image,title, description}) => {
    return (<>
    <div className="Card">
       <img src={image}  alt={title} className="Card__image"/>
        <h2 className="Card__title">{title}</h2>
       <div className="Card__textbox">{description}</div>
    </div>
    </>  );
}
 
export default Card;