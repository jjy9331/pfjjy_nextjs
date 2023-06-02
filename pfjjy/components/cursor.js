import { useState, useEffect } from "react";
import classNames from "classnames";

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

export default function CustomCursor() {
    if (typeof navigator !== "undefined" && isMobile()) return null;

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        
        const handleClick = (event) => {
            console.log(event.target.className);
        };

        document.addEventListener('click', handleClick);

        return () => {
            removeEventListeners();
            document.removeEventListener('click', handleClick);
        }
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
        setClicked(false);
    };

    const onMouseUp = () => {
        setClicked(true);
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    const handleLinkHoverEvents = () => {
        const elements = document.querySelectorAll("a, button, li");

        elements.forEach((el) => {
            el.addEventListener("mouseover", () => {
                setClicked(false);
                setLinkHovered(true);
            });

            el.addEventListener("mouseout", () => {
                setLinkHovered(false);
            });
        });
    };

    const cursorClasses = classNames("cursor", {
        "cursor--clicked": clicked && !linkHovered,
        // "cursor--hidden": hidden,
        "cursor--link-hovered": linkHovered
    });

    return (
        // <div
        //     className={cursorClasses}
        //     style={{ left: `${position.x}px`, top: `${position.y}px` }}
        // />
        <div>
            <svg className={cursorClasses} style={{ left: `${position.x}px`,top: `${position.y}px` }}>
                <circle cx="0" cy="0" r="10"></circle>
            </svg>
        </div>
    );
}

