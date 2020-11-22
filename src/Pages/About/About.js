import React from 'react';
import Card from "../../Components/Card"
import Photo from "../../assets/images/Photo.jpg"
const About = () => {
    const details = {
        image: Photo,
        title: "About me",
        description: "Welcome to my page. I'm Kuba. I graduated from Adam Mickiewicz University in English in July 2019. Afterwards, my friend inspired me to try web development as a new hobby. Since then I began studying HTML, CSS, JavaScript and React by creating my own projects."
    }

    return (
        <>
            <Card image={details.image} title ={details.title} description={details.description}/>
        </>
      );
}
 
export default About;
