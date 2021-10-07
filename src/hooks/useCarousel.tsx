import { useEffect, useState } from 'react';
import { CarouselItem } from '../interfaces/models';
import { carouselData } from '../mocks/data-mock';


export const useCarousel = () => {
    const [state, setState] = useState<CarouselItem[]>([]);

    useEffect(() => {
        setState(carouselData);
    }, []);

    return {
        state
    }
}