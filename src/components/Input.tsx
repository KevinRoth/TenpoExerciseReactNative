import * as React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

interface InputProps {
  value: string;
  onFocus: () => void;
  onChange: (value: string) => void;
}

export const Input = ({value, onChange, onFocus}: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onFocus={() => onFocus()}
        value={value}
        onChangeText={onChange}
      />
      <Image
        style={styles.image}
        source={require('./../assets/images/icon-search.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 28,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  textInput: {
    marginLeft: 12,
    width: 300,
  },
  image: {
    flex: 1,
    position: 'absolute',
    right: 20,
  },
});
