import React from 'react';
import { multiply } from '../../utillities/Calculate';

const Shoes = () => {
    const first = 34;
    const second = 5;
    const total = multiply(first, second)
    return (
        <div>
            <h3>Shoes Here</h3>
            <p>M total: {total}</p>
        </div>
    );
};

export default Shoes;