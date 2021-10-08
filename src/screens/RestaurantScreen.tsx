import React, {useContext} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Image,
  ScrollView,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';
import {UserAddress} from '../components/UserAddress';
import {AppContext} from '../context/AppContext';
import {RootStackParams} from '../navigation/StackNavigator';
import {Rest} from '../interfaces/models';
import {RestaurantDetails} from '../components/RestaurantDetails';

interface Props extends StackScreenProps<RootStackParams, 'RestaurantScreen'> {}

export const RestaurantScreen = ({route, navigation}: Props) => {
  const restaurant = route.params! as Rest;
  const {userAddress} = useContext(AppContext);
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight
            underlayColor="#D4F9F5"
            onPress={() => navigation.goBack()}>
            <Image source={require('./../assets/images/back.png')} />
          </TouchableHighlight>
          <UserAddress address={userAddress?.address} navigation={navigation} />
          <Image
            style={styles.search}
            source={require('./../assets/images/icon-search.png')}
          />
        </View>
        <RestaurantDetails item={restaurant} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  container: {
    backgroundColor: '#D4F9F5',
  },
  header: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 60,
  },
  search: {
    height: 24,
    width: 24,
  },
});
