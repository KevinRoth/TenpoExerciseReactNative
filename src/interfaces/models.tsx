import { Restaurants } from '../components/Restaurants';
export interface CarouselItem {
    title: string;
    subtitle: string;
    description: string;
}

export interface Category {
    name: string;
    imgSrc: any;
}

export interface Rest {
    name: string;
    score: string;
    deliveryTime: string;
    imgSrc: any;
    discount: string;
    category: string;
}

export interface Fav {
    name: string;
    description: string;
    score: string;
    deliveryTime: string;
    imgSrc: any;
    avatar: any;
}