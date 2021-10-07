import { useEffect, useState } from 'react';
import { Rest } from '../interfaces/models';
import { restaurantsData } from '../mocks/data-mock';


export const useRestaurants = () => {
    const [state, setState] = useState<Rest[]>([]);

    useEffect(() => {
        setState(restaurantsData);
    }, []);

    return {
        state
    }
}