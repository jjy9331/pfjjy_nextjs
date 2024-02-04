import React from "react";

export default function Pfnext({ scrollYValue }) {
    const handleNextClick = () => {
            window.scrollTo({
            top: scrollYValue,
            behavior: "smooth",
        });
    };

    return (
        <span 
            className="material-symbols-outlined" 
            data-value={scrollYValue}
            onClick={handleNextClick}
        >
            arrow_forward_ios
        </span>
    );
}
