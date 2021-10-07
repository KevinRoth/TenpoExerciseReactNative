import { useEffect, useState } from 'react';
import { Fav } from '../interfaces/models';
import { favoritesData } from '../mocks/data-mock';


export const useFavorites = () => {
    const [state, setState] = useState<Fav[]>([]);

    useEffect(() => {
        setState(favoritesData);
    }, []);

    return {
        state
    }
}