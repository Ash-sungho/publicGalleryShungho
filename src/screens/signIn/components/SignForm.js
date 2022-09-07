import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import BorderInput from '../../../components/BorderInput';

const SignForm = ({form, isSignUp, createChangeTextHandler, onSubmit}) => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  return (
    <View style={styles.form}>
      <BorderInput
        hasMarginBottom
        placeholder="이메일"
        value={form.email}
        autoCapitalize={'none'}
        autoCorrect={false}
        keyboardType={'email-address'}
        autoComplete={'email'}
        onChangeText={text => createChangeTextHandler({name: 'email', text})}
        onSubmitEditing={() => {
          passwordRef.current.focus();
        }}
      />
      <BorderInput
        placeholder="비밀번호"
        hasMarginBottom={isSignUp}
        ref={passwordRef}
        value={form.password}
        secureTextEntry
        returnKeyType={isSignUp ? 'next' : 'done'}
        onChangeText={text => createChangeTextHandler({name: 'password', text})}
        onSubmitEditing={() => {
          isSignUp ? confirmPasswordRef.current.focus() : onSubmit();
        }}
      />
      {isSignUp && (
        <BorderInput
          placeholder="비밀번호 확인"
          value={form.confirmPassword}
          ref={confirmPasswordRef}
          secureTextEntry
          onChangeText={text =>
            createChangeTextHandler({name: 'confirmPassword', text})
          }
          onSubmitEditing={onSubmit}
        />
      )}
    </View>
  );
};

export default SignForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
});
