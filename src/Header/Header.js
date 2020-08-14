import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import pokemon from "../Images/pokemon.png";



export default class Header extends Component{
    render() {
        return (
            <header className="header" >
            <Link to={"/"} > <img className="pokeimg"src={pokemon} alt=""/ ></Link>
    </header>
)};
}