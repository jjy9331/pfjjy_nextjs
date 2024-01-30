import React, { useEffect, useState } from 'react';

import CustomCursor from '../components/cursor.js'
import Pop_h from '@/components/pop_h.js';
import Pop_f from '@/components/pop_f.js';
import Sctracker from '../components/sctracker.js'

export default function Gebiscon() {

    return (
        <div>
            <CustomCursor />
            <Sctracker />
            <Pop_h title="UI UX mindset" dataValue={22527}/>
            <Pop_f/>
        </div>
    )
}
