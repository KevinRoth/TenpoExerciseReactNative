import * as React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Rest } from '../interfaces/models';

interface RestaurantsProps {
    restaurants: Rest[];
    navigation: any;
}

const {width} = Dimensions.get('window');

export const Restaurants = ({ restaurants, navigation }: RestaurantsProps) => {

    const selectedRestaurant = (restaurant: Rest) => {
        navigation.navigate('RestaurantScreen', {
            ...restaurant
        });
    }

    return ( 
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.scrollView}>
                {restaurants.map(
                    ({name, score, deliveryTime, imgSrc, discount, category}, index) => (
                        <TouchableHighlight
                            key={index}
                            underlayColor="#ffffff"
                            onPress={() => {
                                selectedRestaurant({name, score, deliveryTime, imgSrc, discount, category});
                            
                        }}>
                            <View
                                style={[
                                styles.container,
                                restaurants.length - 1 === index ? styles.lastItem : null,
                                ]}>
                                <Image style={styles.image} source={imgSrc} />
                                <Text style={styles.title}>{name}</Text>
                                <Text style={styles.timeScore}>
                                    <Image source={require('./../assets/images/star.png')} />
                                    {score} {deliveryTime}
                                </Text>
                                <Text style={styles.discount}>{discount}</Text>
                            </View>
                        </TouchableHighlight>
                    ),
                )}
        </ScrollView>
     );
}

const styles = StyleSheet.create({
    scrollView: {
        marginBottom: 50,
        marginTop: 10,
        width,
    },
    container: {
        marginRight: 10,
        marginTop: 10,
    },
    lastItem: {
      marginRight: 30,
    },
    image: {
        borderRadius: 15,
        height: 100,
        width: 100,
    },
    title: {
        fontFamily: 'Gotham-Light',
        marginTop: 5,
        textAlign: 'center',
        width: 100,
    },
    timeScore: {
        fontFamily: 'Gotham-Light',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
        width: 100,
    },
    discount: {
        backgroundColor: '#00BAA4',
        borderRadius: 50,
        color: '#ffffff',
        fontFamily: 'Gotham-Light',
        fontSize: 8,
        height: 35,
        position: 'absolute',
        right: -5,
        textAlign: 'center',
        textAlignVertical: 'center',
        top: -10,
        width: 35,
    },
});