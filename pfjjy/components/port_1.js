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
                    <div className="pf1back pfbn_mv">
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
                    <div className="pf1next pfbn_mv">
                        <Pfnext scrollYValue={24594} />
                    </div>
        </div>
    );
}
