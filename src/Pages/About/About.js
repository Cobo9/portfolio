import React from 'react';
import Photo from "../../assets/images/Photo.jpg"
import Card from "../../Components/Card"
import "./About.css"
const About = () => {

    return (
        <Card>
            <div className="about">
            <img src={Photo} className="about__photo"/>
            <div className="about__text">
                <h2>Kuba Gond</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste consectetur assumenda tempore eos fugiat sit, quasi asperiores molestiae, est reiciendis, illum illo nam natus veritatis reprehenderit accusantium pariatur. Laborum.
                </p>
            </div>
            </div>
             
        </Card>
      );
}
 
export default About;
