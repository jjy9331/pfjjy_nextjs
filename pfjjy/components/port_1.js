import React, {useState} from "react";

export default function Port_1({onPortClick}) {
    const [isHovering, setIsHovering] = useState(false);

    // port 1 hover ani

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div className='port'>
                <div>
                    <span id="pf1back" className="material-symbols-outlined" data-value="17899">arrow_back_ios</span>
                            <img 
                                className='port_1'
                                src={isHovering ? "/img/port1.gif" : "/img/port1.png"}
                                alt="UI,UX_mindset"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => onPortClick('port1')}
                            />
                    <span id="pf1next" className="material-symbols-outlined" data-value="24594">arrow_forward_ios</span>
                </div>
        </div>
    );
}
