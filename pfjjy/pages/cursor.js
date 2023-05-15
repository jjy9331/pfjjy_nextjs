// import { useEffect, useRef } from "react";

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
        return () => removeEventListeners();
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
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    const handleLinkHoverEvents = () => {
        document.querySelectorAll("a,button,li").forEach((el) => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };

    const cursorClasses = classNames("cursor", {
        "cursor--clicked": clicked,
        "cursor--hidden": hidden,
        "cursor--link-hovered": linkHovered
    });

    return (
        <div
            className={cursorClasses}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    )
}


// export default function CustomCursor() {
//     const cursorRef = useRef(null)
    

//     useEffect(() => {

//         if (cursorRef.current == null || cursorRef == null)

//             return;

//                 const cursor =  () => {
//                     document.addEventListener('mousemove', e => {
//                         if (cursorRef.current == null)
//                             return;
//                         cursorRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
//                     })
//                 }

//                 const cursor_click = () => {
//                     document.addEventListener('click', () => {
//                         if (cursorRef.current == null)
//                             return;
//                         cursorRef.current.classList.add("click_ani");
//                         setTimeout(() => {
//                             if (cursorRef.current == null)
//                                 return;
//                             cursorRef.current.classList.remove("click_ani");
//                         }, 500)
//                     })
//                 }


//                 cursor();
//                 cursor_click();

//     }, [])

//     return (
//     <div className='cursor' ref={cursorRef}>
//     </div>
//     )
// }