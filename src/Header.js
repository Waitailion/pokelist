import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import pokemon from "./pokemon.png";



export default class Header extends Component{
    render() {
        return (
            <header className="header" >
            <Link to={"/"} > <img className="pokeimg"src={pokemon} alt=""/ ></Link>
    </header>
)};
}