import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Fav } from '../interfaces/models';

interface FavoritesProps {
    favorites: Fav[];
}

const {width} = Dimensions.get('window');
 
export const Favorites = ({ favorites }: FavoritesProps) => {
    return ( 
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.scrollView}>
            {favorites.map(
                ({name, deliveryTime, avatar, description, score, imgSrc}, index) => (
                    <View
                        key={index}
                        style={[
                            styles.container,
                            favorites.length - 1 === index ? styles.lastItem : null,
                        ]}>
                        <Image style={styles.image} source={imgSrc} />
                        <Image style={styles.avatar} source={avatar} />
                        <View style={styles.text}>
                            <Text style={styles.description}>{description}</Text>
                            <Text style={styles.score}>
                            <Image source={require('./../assets/images/star.png')} />
                            {score}
                            </Text>
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.deliveryTime}>{deliveryTime}</Text>
                        </View>
                    </View>
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
        marginTop: 10,
    },
    lastItem: {
        marginRight: 30,
    },
    image: {
        height: 105,
        width: 257
    },
    avatar: {
        height: 50,
        marginLeft: 15,
        marginTop: 10,
        position: 'absolute',
        width: 50,
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
    },
    description: {
        alignItems: 'flex-start',
        color: '#333333',
        fontFamily: 'Gotham-Light',
        fontSize: 12,
    },
    score: {
        alignItems: 'flex-end',
        color: '#333333',
        fontFamily: 'Gotham-Light',
        fontSize: 12,
        textAlign: 'right',
    },
    title: {
        alignItems: 'flex-start',
        color: '#00BAA4',
        fontFamily: 'Gotham-Bold',
        fontSize: 12,
    },
    deliveryTime: {
        alignItems: 'flex-end',
        color: '#333333',
        fontFamily: 'Gotham-Light',
        fontSize: 12,
        textAlign: 'right',
    },
});