import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
 
export const Header = () => {
    return ( 
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={require('./../assets/images/profile.png')}
            />
            <Image
                style={styles.search}
                source={require('./../assets/images/icon-search.png')}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 40
    },
    avatar: {
      height: 40,
      width: 40,
    },
    search: {
      height: 32,
      width: 32,
    },
})