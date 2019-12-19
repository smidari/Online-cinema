import React from "react";
import Carusel from "./carusel/Carusel";
import Header from "../ui/header/Header";

const Home = (props) => {
    return (
        <div className='app-wrapper'>
            <Header dataNav={props.dataNav}/>
            <Carusel dataCarusel={props.dataCarusel}/>

        </div>
    )
}
export default Home;