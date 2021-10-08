import React, { useContext, useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, ScrollView, View, TouchableOpacity, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/core';
import { PERMISSIONS, request } from 'react-native-permissions';
import { UserAddress } from '../components/UserAddress';
import { Input } from '../components/Input';
import { AppContext } from '../context/AppContext';
import { useLocation } from '../hooks/useLocation';
import { Location } from '../interfaces/models';
import { useAddress } from '../hooks/useAddress';
import { numberLiteralTypeAnnotation } from '@babel/types';
import { addressData } from '../mocks/data-mock';
import { AddressList } from '../components/AddressList';

interface FormState {
  address: string;
  additionalInfo: string;
}

export const LocationScreen = () => {
    const [form, setForm] = useState<FormState>({
      additionalInfo: '',
      address: ''
    });
    const navigator = useNavigation();
    const { state:addressList } = useAddress();

    const [coords, setcoords] = useState<Location | undefined>(undefined);
    const [focus, setFocus] = useState<boolean>(false);
    const { getCurrentLocation } = useLocation();

    const mapViewRef = useRef<MapView>();

    const {setUserAddress, userAddress} = useContext(AppContext);

    const setLocationMap = (latitude: number, longitude: number, address = 'Mi casa') => {
      mapViewRef.current?.animateCamera({
        center: { latitude, longitude }
      });
      setForm({...form, address })
      setcoords({ latitude, longitude });
    }

    const getCoords = async () => {
      try {
        const infoCoords = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        switch (infoCoords) {
          case 'granted':
            const { latitude, longitude } = await getCurrentLocation();

            setLocationMap(latitude, longitude);
        }
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
        getCoords();
    }, []);

    const submit = () => {
      const latitude = coords ? coords.latitude : 0;
      const longitude = coords ? coords.longitude : 0;
      setUserAddress({ ...form, latitude, longitude })
      navigator.goBack();
    }

    const setAddressSelected = (item: any) => {
      setLocationMap(item.latitude, item.longitude, item.address)
    }


    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <UserAddress address={userAddress?.address}/>
            <Input
              value={form.address}
              onFocus={() => setFocus(!focus)}
              onChange={(value: string) => setForm({ ...form, address: value })}
            />
          </View>
          
          {(!focus && coords) ? (
            <>
              <MapView
                style={styles.map}
                showsUserLocation
                ref={ (el: any) => mapViewRef.current = el! }
                initialRegion={{
                  latitude: coords.latitude,
                  longitude: coords.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker
                    coordinate={coords}
                    image={require('./../assets/images/ping-icon.png')}
                  />
              </MapView>

              <View style={styles.formContext}>
                <Text style={styles.title}>Agregar información de entrega</Text>
                <Text style={styles.subtitle}>Depto, Oficina, piso, block</Text>
                <TextInput
                  style={styles.input}
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={(value: string) => setForm({ ...form, additionalInfo: value }) }
                  value={form.additionalInfo}
                />
                <TouchableOpacity onPress={submit}>
                  <Text style={styles.submit}>Agregar Dirección</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : 
          (
            <AddressList items={addressList} itemSelected={(item: any) => { 
              setAddressSelected(item)
              setFocus(!focus);
            }}/>
          )}
        </View>
      </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'transparent',
    marginTop: 12
  },
  map: {
    flex: 1,
    height: 200,
  },
  formContext: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 12,
  },
  title: {
    fontFamily: 'Gotham-Bold',
    fontSize: 14,
    marginBottom: 6,
  },
  subtitle: {
    color: '#AEAEAE',
    fontFamily: 'Gotham-Light',
    fontSize: 12,
  },
  input: {
    borderColor: '#F2F2F2',
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
    marginTop: 12,
  },
  submit: {
    backgroundColor: '#00BAA4',
    borderColor: '#00BAA4',
    borderRadius: 6,
    borderWidth: 1,
    color: '#FFFFFF',
    fontFamily: 'Gotham-Bold',
    fontSize: 12,
    padding: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  containerList: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
  },
  firstItem: {
      marginTop: 35,
  },
  itemTitle: {
      color: '#333333',
      fontFamily: 'Gotham-Book',
      fontSize: 16,
      margin: 20,
      marginBottom: 10,
      marginTop: 10,
  },
  itemSubtitle: {
      color: '#ADADAD',
      fontFamily: 'Gotham-Book',
      fontSize: 12,
      marginBottom: 10,
      marginLeft: 20,
  },
});