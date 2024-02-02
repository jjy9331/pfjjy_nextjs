import React, { useEffect, useState } from 'react';

import CustomCursor from '../components/cursor.js'
import Pop_h from '@/components/pop_h.js';
import Pop_f from '@/components/pop_f.js';
import Sctracker from '../components/sctracker.js'

export default function Gebiscon({onClose}) {

    return (
        <div className='port_pop'>
            <Pop_h title="UI UX mindset" onClose={onClose} />
            <div className='pop_test'>test1</div>
            <div className='pop_test'>test2</div>
            <div className='pop_test'>test3</div>
            <div className='pop_test'>test4</div>
            <div className='pop_test'>test5</div>
            <div className='pop_test'>test6</div>
            <Pop_f/>
        </div>
    )
}
