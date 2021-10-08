import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface AddressListProps {
  items: any[];
  itemSelected: (item: any) => void;
}

export const AddressList = ({items, itemSelected}: AddressListProps) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <View key={index} style={styles.container}>
            <TouchableOpacity onPress={() => itemSelected(item)}>
              <Text
                style={[
                  styles.itemTitle,
                  index === 0 ? styles.firstItem : null,
                ]}>
                {item.address}
              </Text>
              <Text style={styles.itemSubtitle}>{item.location}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
  },
  firstItem: {
    marginTop: 35,
  },
  itemTitle: {
    color: '#333333',
    fontFamily: 'Gotham-Book',
    fontSize: 16,
    margin: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  itemSubtitle: {
    color: '#ADADAD',
    fontFamily: 'Gotham-Book',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 20,
  },
});
