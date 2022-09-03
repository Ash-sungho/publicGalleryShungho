import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';

const CustomButton = ({onPress, title, hasMarginBottom}) => {
  return (
    <View style={[styles.block, hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.wrapper,
          Platform.OS === 'ios' && pressed && {opacity: 0.5},
        ]}
        android_ripple={{color: '#ffffff'}}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  block: {},
  overflow: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  wrapper: {
    borderRadius: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6200ee',
  },
  margin: {
    marginBottom: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
});
