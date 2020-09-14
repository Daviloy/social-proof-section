import React from "react";
import RatingIcon from "../images/icon-star.svg";

const Rating = ({ platform }) => {
    return (
        <div className="Rating">
            <div className="Rating__Icons">
                <img src={RatingIcon} alt="Ratings Icon" />
                <img src={RatingIcon} alt="Ratings Icon" />
                <img src={RatingIcon} alt="Ratings Icon" />
                <img src={RatingIcon} alt="Ratings Icon" />
                <img src={RatingIcon} alt="Ratings Icon" />
            </div>
            <p>Rated 5 Stars in {platform}</p>
        </div>
    );
};

export default Rating;
