import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { useContext } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator';
import { Carousel } from '../components/Carousel';
import { Categories } from '../components/Categories';
import { Restaurants } from '../components/Restaurants';
import { Favorites } from '../components/Favorites';
import { useCarousel } from '../hooks/useCarousel';
import { useCategories } from '../hooks/useCategories';
import { useRestaurants } from '../hooks/useRestaurants';
import { useFavorites } from '../hooks/useFavorites';
import { Header } from '../components/Header';
import { AppContext, IAppContext } from '../context/AppContext';
import { UserAddress } from '../components/UserAddress';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'>{};

export const HomeScreen = ({ route, navigation }: Props) => {

    const carouselItems = useCarousel().state;
    const categoriesItems = useCategories().state;
    const restaurantsItems = useRestaurants().state;
    const favoritesItems = useFavorites().state;
    const { userAddress } = useContext<IAppContext>(AppContext);

    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                  <Header></Header>
                  <Carousel items={carouselItems} />
                  <View style={styles.content}>
                      <TouchableOpacity onPress={() => navigation.navigate('LocationScreen')}>
                        <UserAddress address={userAddress?.address}></UserAddress>
                      </TouchableOpacity>
                      <View style={styles.contentList}>
                        <Text style={styles.title}>RESTAURANTES</Text>
                        <Restaurants restaurants={restaurantsItems} navigation={navigation} />
                        <Text style={styles.title}>CATEGORÍAS</Text>
                        <Categories categories={categoriesItems} />
                        <Text style={styles.title}>TUS FAVORITOS</Text>
                        <Favorites favorites={favoritesItems} />
                      </View>
                  </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F2F2F2',
    },
    contentList: {
      backgroundColor: '#ffffff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      elevation: 3,
      paddingLeft: 18,
      paddingTop: 40,
      shadowColor: '#00000029',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.3,
    },
    title: {
      color: '#333333',
      fontFamily: 'Gotham-Bold',
      fontSize: 18,
    },
    content: {
      backgroundColor: '#D4F9F5',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
});
