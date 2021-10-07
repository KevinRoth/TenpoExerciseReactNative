import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Category } from '../interfaces/models';
interface CategoriesProps {
    categories: Category[];
}

const {width} = Dimensions.get('window');

export const Categories = ({ categories }: CategoriesProps) => {

    const lastCategory = (index: number) => {
        return categories.length - 1 === index ? styles.lastItem : null;
    }
    
    return ( 
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.scrollView}>
            {categories.map(({name, imgSrc}, index) => 
                (
                    <View
                        key={index}
                        style={[
                        styles.container,
                        lastCategory(index),
                        ]}>
                            
                            <Image style={styles.image} source={imgSrc}/>
                            
                            <Text style={styles.title}>{name}</Text>
                    </View>
                    )
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
        height: 71,
        width: 160,
    },
    title: {
        ...StyleSheet.absoluteFillObject,
        color: '#ffffff',
        fontFamily: 'Gotham-Bold',
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});
