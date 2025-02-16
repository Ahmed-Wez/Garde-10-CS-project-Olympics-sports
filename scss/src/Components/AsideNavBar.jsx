import React from "react";

import SearchIcon from "../assets/icons/zoom";

function AsideNavBar({ clickOverLeftNav }) {

    return (
        <aside className="aside right-aside">
                <div className="header">
                    <div className="left-side">
                        <label htmlFor="search-input"><SearchIcon /></label>
                        <input type="search" name="search-input" id="search-input" className="search-input" placeholder="Start typing" autoFocus />
                    </div>
                    <div className="right-side">
                        <div className="close" onClick={clickOverLeftNav}></div>
                    </div>
                </div>
                <div className="body">
                    <div className="col col-1">
                        <h3 className="title">Popular searches</h3>
                        <div className="items">
                            <a href="#" className="link item-1">item 1</a>
                            <a href="#" className="link item-2">item 2</a>
                            <a href="#" className="link item-3">item 3</a>
                            <a href="#" className="link item-4">item 4</a>
                            <a href="#" className="link item-5">item 5</a>
                            <a href="#" className="link item-6">item 6</a>
                            <a href="#" className="link item-7">item 7</a>
                            <a href="#" className="link item-8">item 8</a>
                            <a href="#" className="link item-9">item 9</a>
                        </div>
                    </div>
                    <div className="col col-2">
                        <h3 className="title">Most searched collections</h3>
                        <div className="collections">
                            <a href="#" className="collection collection-1">
                            <img src="https://www.outsidersstore.com/cdn/shop/files/October_Homepage_Homepage_carousel_2.jpg?v=1698318982&width=1296" alt="" />
                            <p className="name">name 1</p>
                        </a>
                        <a href="#" className="collection collection-2">
                            <img src="https://www.outsidersstore.com/cdn/shop/files/October_Homepage_Homepage_carousel_4.jpg?v=1698318982&width=1296" alt="" />
                            <p className="name">name 2</p>
                        </a>
                        </div>
                    </div>
                </div>
        </aside>
    );
}

export default AsideNavBar;