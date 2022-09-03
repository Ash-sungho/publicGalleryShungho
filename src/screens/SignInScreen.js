import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import BorderInput from '../components/BorderInput';
import CustomButton from '../components/CustomButton';

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <View>
        <Text style={styles.text}>PublicGallery</Text>
      </View>
      <View style={styles.form}>
        <BorderInput hasMarginBottom />
        <BorderInput />
        <View style={styles.buttons}>
          <CustomButton title="로그인" hasMarginBottom />
          <CustomButton title="회원가입" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  buttons: {
    marginTop: 64,
  },
});
