import React from "react";

const Testimonial = (props) => {
    const { image, name, status, text } = props.data;

    let verfiedStatus;

    if (status === "verified") {
        verfiedStatus = "Verified Buyer";
    } else {
        verfiedStatus = "Unverfied Buyer";
    }

    return (
        <div className="Testimonial">
            <div className="Testimonial__Header">
                <img src={image} alt={text} />
                <div className="Testimonial__Info">
                    <h3>{name}</h3>
                    <h4>{verfiedStatus}</h4>
                </div>
            </div>
            <div className="Testimonial__Text">
                <blockquote>
                    <p>"{text}"</p>
                </blockquote>
            </div>
        </div>
    );
};

export default Testimonial;
