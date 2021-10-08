import { useEffect, useState, useRef } from 'react';

import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/models';

export const useLocation = () => {

    const [ hasLocation, setHasLocation ] = useState(false);

    const [ initialPosition, setInitialPosition ] = useState<Location>({
        longitude: 0,
        latitude: 0
    });

    const [ userLocation, setUserLocation] = useState<Location>({
        longitude: 0,
        latitude: 0
    });

    const isMounted = useRef(true);


    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }
    }, [])

    

    useEffect(() => {

        getCurrentLocation()
            .then( location => {

                if( !isMounted.current ) return;

                setInitialPosition(location);
                setUserLocation(location);
                setHasLocation(true);
            });

    }, []);


    const getCurrentLocation = (): Promise<Location> => {
        return new Promise( (resolve, reject) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    });
    
                },
                (err) => reject({ err }), { enableHighAccuracy: true }
            );
        });
    }

    return {
        hasLocation,
        initialPosition,
        getCurrentLocation,
        userLocation,
    }
}
