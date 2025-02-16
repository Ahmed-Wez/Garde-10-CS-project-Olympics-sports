import React from "react";

function Overlay({ clickOverLeftNav }) {

    return (
        <div className="overlay" onClick={clickOverLeftNav}></div>
    );
}

export default Overlay;