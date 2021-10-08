import { useEffect, useState } from 'react';
import {  Location } from '../interfaces/models';
import { addressData } from '../mocks/data-mock';


export const useAddress = () => {
    const [state, setState] = useState<Location[]>([]);

    useEffect(() => {
        setState(addressData);
    }, []);

    return {
        state
    }
}