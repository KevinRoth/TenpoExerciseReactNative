import React, {createContext} from 'react';

export interface IAppContext {
  restaurantSelected: any;
  setRestaurantSelected: any;
  userAddress: any;
  setUserAddress: any;
}

const defaultValues: IAppContext = {
  restaurantSelected: undefined,
  setRestaurantSelected: () => {},
  userAddress: undefined,
  setUserAddress: () => {},
};

export const AppContext = createContext(defaultValues);

export const AppProvider = ({ children }: any) => {

  return (
    <AppContext.Provider
      value={{
        ...defaultValues
      }}>
        {children}
    </AppContext.Provider>
  )
}