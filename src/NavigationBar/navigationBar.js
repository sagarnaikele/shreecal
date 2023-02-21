import React from "react";
import '../NavigationBar/navigationBar.css';

class Navbar extends React.Component {
    render() {
        return (
            // <!-- Start  Logo & Naviagtion  -->
            <div class="topcorner">

<nav>
	<a href="#">Home</a>
	<a href="#">About</a>
	<a href="#">Blog</a>
	<a href="#">Portefolio</a>
	<a href="#">Contact</a>
	<div class="animation start-home"></div>
</nav>
          </div>
          
          
        );
    }
}
export default Navbar;