import React from "react";
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setDataValue } from '../redux/dataValueSlice';

export default function pop_h({ title, dataValue }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setDataValue(dataValue));
    }

    return (
        <div className="pop_h">
            <div className="pop_h_inner">
                <a href="javascript:void(0);">
                    <h3 className="pp_t">{title}</h3>
                </a>
                <Link className="close" href="/" passHref>
                    <div onClick={handleClick} data-value={dataValue}>X</div>
                </Link>
            </div>
        </div>
    );
}
