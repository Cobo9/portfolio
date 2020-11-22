import React from 'react';
import Card from "../../Components/Card"
import StackImg from "../../assets/images/stack.png"
import StackGrid from "./StackGrid/StackGrid"
const Stack = () => {

    const details = {
        image: StackImg,
        title: "My stack",
    }

    return (<> 
    <Card image={details.image} title={details.title} description={StackGrid}/>
    </> );
}
 
export default Stack;