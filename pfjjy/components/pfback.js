import React from "react";

export default function Pfback({ scrollYValue }) {
    const handleBackClick = () => {
            window.scrollTo({
            top: scrollYValue,
            behavior: "smooth",
        });
    };

    return (
        <span
            className="material-symbols-outlined"
            data-value={scrollYValue}
            onClick={handleBackClick}
        >
        arrow_back_ios
        </span>
    );
}
