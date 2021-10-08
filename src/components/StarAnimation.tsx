import React from 'react';
import {Animated, Image, StyleSheet} from 'react-native';
import {useEffect} from 'react';
const cross = require('./../assets/images/cross.png');

export const StarAnimation = () => {
  const fadeAnimation = new Animated.Value(0);
  const fadeIn = () => {
    fadeAnimation.setValue(0);
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
      delay: 500,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  });

  return (
    <Animated.View style={{opacity: fadeAnimation}}>
      <Image style={[styles.image, styles.star0]} source={cross} />
      <Image style={[styles.image, styles.star1]} source={cross} />
      <Image style={[styles.image, styles.star2]} source={cross} />
      <Image style={[styles.image, styles.star3]} source={cross} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    left: -65,
    top: 30,
  },
  star0: {
    left: 120,
  },
  star1: {
    left: 150,
    top: 5,
  },
  star2: {
    left: 0,
  },
  star3: {
    left: 0,
    top: 0,
  },
});
