import React, { useEffect, useState } from 'react';

import CustomCursor from '../components/cursor.js'
import Pop_h from '@/components/pop_h.js';
import Pop_f from '@/components/pop_f.js';

export default function Gebiscon() {

    return (
        <div>
            <CustomCursor />
            <Pop_h title="UI UX mindset"/>
            <Pop_f/>
        </div>
    )
}
