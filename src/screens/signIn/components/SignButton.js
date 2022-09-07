import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import CustomButton from '../../../components/CustomButton';

const SignButton = ({isSignUp, onSubmit, loading}) => {
  const navigation = useNavigation();
  const primaryTitle = isSignUp ? '회원가입' : '로그인';
  const secondaryTitle = isSignUp ? '로그인' : '회원가입';

  const onSecondaryButtonPress = () => {
    if (isSignUp) {
      navigation.goBack();
    } else {
      navigation.push('SignInScreen', {isSignUp: true});
    }
  };

  if (loading)
    return (
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator size={32} color="#6200ee" />
      </View>
    );
  return (
    <View style={styles.buttons}>
      <CustomButton
        title={primaryTitle}
        hasMarginBottom
        onPress={onSubmit}
        theme={'primary'}
      />
      <CustomButton
        title={secondaryTitle}
        theme={'secondary'}
        onPress={() => {
          onSecondaryButtonPress();
        }}
      />
    </View>
  );
};

export default SignButton;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  spinnerWrapper: {
    marginTop: 64,
    height: 104,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
