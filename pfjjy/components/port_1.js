import React, {useState} from "react";

import Pfback from './pfback';
import Pfnext from './pfnext';

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
                    <div id="pf1back">
                        <Pfback scrollYValue={17899} />
                    </div>
                                <img 
                                    className='port_1'
                                    src={isHovering ? "/img/port1.gif" : "/img/port1.png"}
                                    alt="UI,UX_mindset"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => onPortClick('port1')}
                                />
                    <div id="pf1next">
                        <Pfnext scrollYValue={24594} />
                    </div>
        </div>
    );
}
