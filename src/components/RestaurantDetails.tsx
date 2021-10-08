import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import {Rest} from '../interfaces/models';

interface RestaurantDetailsProps {
  item: Rest;
}
const ScreenHeight = Dimensions.get('window').height - 130;

export const RestaurantDetails = ({
  item: {imgSrc, name, category},
}: RestaurantDetailsProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imgSrc} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.category}>{category}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>Detalle de restaurante</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: ScreenHeight,
    elevation: 1,
    shadowColor: '#00000029',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    alignItems: 'center',
    paddingTop: 28,
  },
  image: {
    height: 148,
    width: 148,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  name: {
    fontFamily: 'Gotham-Bold',
    fontSize: 22,
    marginTop: 19,
  },
  category: {
    fontFamily: 'Gotham-Book',
    fontSize: 12,
    color: '#ADADAD',
    marginTop: 5,
  },
  detailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detail: {
    fontFamily: 'Gotham-Book',
    fontSize: 20,
    color: '#ADADAD',
    textAlign: 'center',
  },
});
