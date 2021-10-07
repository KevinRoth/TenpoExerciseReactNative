import React, { useEffect, useState } from "react";
import { Animated, Dimensions, Image, NativeScrollEvent, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CarouselItem } from '../interfaces/models';
import { StartAnimation } from "./StartAnimation";
const ilustration1 = require('./../assets/images/ilustracion_1.png');
const ilustration2 = require('./../assets/images/ilustracion_2.png');

interface CarouselProps {
    items: CarouselItem[];
}
const {width} = Dimensions.get('window');

export const Carousel = ({ items }: CarouselProps) => {
    const [slideState, setSlideState] = useState(0);
    const moveAnimation = new Animated.ValueXY({x: 0, y: 0});
    

    useEffect(() => {
        move();
    }, [slideState]);

    const move = () => {
        Animated.spring(moveAnimation, {
          toValue: {x: -65, y: 30},
          useNativeDriver: false,
          delay: 500,
        }).start();
    }
    

    
    const onScroll = (event: NativeScrollEvent) => {
      const slide = Math.ceil(
          event.contentOffset.x / event.layoutMeasurement.width,
      );
      if (slide !== slideState) {
        setSlideState(slide);
      }
    }

    const selected = (index: number) => {
      return slideState === index ? styles.pageSelected : styles.pageUnselected;
    }

    return ( 
        <View>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              style={{width}}
              onScroll={({nativeEvent}) => onScroll(nativeEvent)}>
              {items.map(({title, subtitle, description}, index) => {
                  return (
                  <View key={index} style={{...styles.container}}>
                      <View style={styles.texts}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={[styles.title, styles.subtitle]}>
                            {subtitle}
                        </Text>
                        <Text style={styles.detail}>{description}</Text>
                      </View>

                      <View style={styles.images}>
                        <StartAnimation show={slideState}/>
                        <View style={styles.ilustration}>
                          <Image
                            style={styles.motoImage}
                            source={ilustration2}
                          />
                          <Image
                              style={styles.handImage}
                              source={ilustration1}
                          />
                        </View>
                      </View>
                  </View>
                  );
              })}
            </ScrollView>

            <View style={styles.pagination}>
              {items.map((_, index) => (
                  <Text
                  key={index}
                  style={[
                      styles.page,
                      selected(index)
                  ]}
                  />
              ))}
            </View>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 180,
      paddingLeft: 16,
      width,
    },
    title: {
      color: '#333',
      fontFamily: 'Roboto-Black',
      fontSize: 42,
      margin: 0,
      padding: 0,
    },
    subtitle: {
      color: '#00baa4',
      lineHeight: 40,
    },
    detail: {
      color: '#333333',
      fontFamily: 'Gotham-Bold',
      fontSize: 12,
      letterSpacing: 2.4,
    },
    texts: {
      flex: 1,
      marginTop: 30,
    },
    images: {
      flex: 1,
    },
    ilustration: {
      flex: 2.5,
      flexDirection: 'row',
    },
    motoImage: {
      position: 'absolute',
      right: 110,
      height: 160,
      width: 135
    },
    handImage: {
      position: 'absolute',
      right: 55,
        height: 180,
        width: 118
    },
    pagination: {
      alignSelf: 'center',
      bottom: 15,
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'absolute',
      right: 20,
    },
    page: {
      borderColor: '#333',
      borderRadius: 20,
      borderWidth: 1,
      height: 5,
      margin: 3,
      width: 5,
    },
    pageSelected: {
      backgroundColor: '#00baa4',
    },
    pageUnselected: {
      backgroundColor: '#ffffff',
    },
});
