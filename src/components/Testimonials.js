import React from "react";
import TESTIMONIALS from "../data/Testimonials";
import Testimonial from "./Testimonial";

const Testimonials = () => {
    return (
        <div className="Testimonials">
            {TESTIMONIALS.map((testimonial) => (
                <Testimonial key={testimonial.id} data={testimonial} />
            ))}
        </div>
    );
};

export default Testimonials;
