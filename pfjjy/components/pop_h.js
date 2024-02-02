import React from "react";

export default function pop_h({ title, onClose }) {

    return (
        <div className="pop_h">
            <div className="pop_h_inner">
                <a href="javascript:void(0);">
                    <h3 className="pp_t">{title}</h3>
                </a>
                <div className="close" onClick={onClose}>X</div>
            </div>
        </div>
    );
}
