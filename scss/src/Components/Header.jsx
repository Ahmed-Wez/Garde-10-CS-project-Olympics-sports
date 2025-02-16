import React, { useState } from "react";
// AsideNavBar
import SearchIcon from "../assets/icons/zoom";
import ShoppingBagIcon from "../assets/icons/shopping-bag";
import ProfileIcon from "../assets/icons/profile";
import SaveIcon from "../assets/icons/bookmark";

function Header({ clickOverLeftNav }) {

    return (
        <header className="header-header">
            <nav className="navbar left-nav">
                <a href="#" className="link shop-link">Men's</a>
                <a href="#" className="link Blog-link">Women's</a>
                <a href="#" className="link Contact-link">Equipment</a>
                <a href="#" className="link Contact-link">Sale</a>
            </nav>
            <div className="logo-container">
                <a href="#" className="logo">Logo</a>
            </div>
            <nav className="navbar right-nav">
                <div className="link search-icon-link" onClick={clickOverLeftNav}><SearchIcon /></div>
                <div className="link account-icon-link" onClick={clickOverLeftNav}><ProfileIcon /></div>
                <div className="link save-icon-link" onClick={clickOverLeftNav}><SaveIcon /></div>
                <div className="link cart-icon-link" onClick={clickOverLeftNav}><ShoppingBagIcon /></div>
            </nav>
        </header>
    );
}

export default Header;