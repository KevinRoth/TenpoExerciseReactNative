import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface UserAddressProps {
  address?: string;
  navigation: any;
}

export const UserAddress = ({address, navigation}: UserAddressProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('LocationScreen')}>
      <View style={styles.icon}>
        <Image source={require('./../assets/images/gps.png')} />
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.address}>
          {address
            ? 'Enviaremos tus pedidos a'
            : 'Agregar dirección de entrega'}
        </Text>
        {address ? (
          <Text numberOfLines={1} style={styles.address}>
            {address}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 10,
    marginBottom: 10,
    right: 0,
    width: '100%',
  },
  icon: {
    flex: 1,
  },
  addressContainer: {
    flex: 8,
  },
  address: {
    color: '#008f7e',
    fontFamily: 'Gotham-Light',
    fontSize: 16,
    textAlign: 'left',
  },
});
