import React, { useRef, useEffect, useState } from "react";


export default function pop_h({ title }) {
    return (
        <div className="pop_h">
            <div className="pop_h_inner">
                <a href="javascript:void(0);">
                    <h3 className="pp_t">{title}</h3>
                </a>
                <a href="javascript:void(0);" className="close">
                    <div>X</div>
                </a>
            </div>
        </div>
    );
}