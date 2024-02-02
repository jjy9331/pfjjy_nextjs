import React from "react";

export default function pop_h({ title, onClose, onPpTClick }) {

    return (
        <div className="pop_h">
            <div className="pop_h_inner">
                <a onClick={onPpTClick}>
                    <h3 className="pp_t" >{title}</h3>
                </a>
                <div className="close" onClick={onClose}>X</div>
            </div>
        </div>
    );
}
