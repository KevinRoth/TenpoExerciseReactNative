import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface UserAddressProps {
    address?: string;
}
 
export const UserAddress = ({ address }: UserAddressProps) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.icon}>
                <Image source={require('./../assets/images/gps.png')} />
            </View>
            <View style={styles.addressContainer}>
                <Text style={styles.address}>
                    {address
                    ? 'Enviaremos tus pedidios a'
                    : 'Agregar dirección de entrega'} 
                </Text>
               {address ? (
                  <Text numberOfLines={1} style={styles.address}>
                    {address}
                  </Text>
                ) : null} 
            </View>
        </View>
     );
}

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
})