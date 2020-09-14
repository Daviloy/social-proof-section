import React from "react";
import HeaderText from "./HeaderText";
import Ratings from "./Ratings";

const Header = () => {
    return (
        <div className="Header">
            <HeaderText />
            <Ratings />
        </div>
    );
};

export default Header;
