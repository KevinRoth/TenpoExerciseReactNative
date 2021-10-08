import React, {createContext, useState} from 'react';

export interface UserAddress {
  address: string;
  latitude: number;
  longitude: number;
  additionalInfo: string;
}

export interface IAppContext {
  userAddress: UserAddress | undefined;
  setUserAddress: (userAddress: UserAddress) => void;
}

const defaultValues: IAppContext = {
  userAddress: undefined,
  setUserAddress: (userAddress: UserAddress) => {},
}

export const AppContext = createContext<IAppContext>(defaultValues);

export const AppProvider = ({ children }: any) => {

  const [userAddress, setAddress] = useState<UserAddress | undefined>(undefined);
  
  const setUserAddress = (address: UserAddress) => {
    setAddress(address)
  }
  return (
    <AppContext.Provider
      value={{
        userAddress,
        setUserAddress,
      }}>
        {children}
    </AppContext.Provider>
  )
}