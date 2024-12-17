import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Star({color}) {
    return (
        <FaStar color={color} size={50}></FaStar>
    )
}