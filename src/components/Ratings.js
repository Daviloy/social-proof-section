import React from "react";
import Rating from "./Rating";

const Ratings = () => {
    return (
        <div className="Ratings">
            <Rating platform="New York Times" />
            <Rating platform="Report Guru" />
            <Rating platform="BestTech" />
        </div>
    );
};

export default Ratings;
