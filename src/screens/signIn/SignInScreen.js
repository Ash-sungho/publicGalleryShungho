import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {signIn, signUp} from '../../lib/auth';
import {createUser, getUser} from '../../lib/users';
import SignButton from './components/SignButton';
import SignForm from './components/SignForm';

const SignInScreen = ({navigation, route}) => {
  const {isSignUp} = route.params ?? {};
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState();

  const createChangeTextHandler = ({name, text}) => {
    setForm({...form, [name]: text});
  };

  const onSubmit = async () => {
    Keyboard.dismiss();
    const {email, password, confirmPassword} = form;
    const info = {email, password};
    if (email === '' || password === '') {
      Alert.alert('실패', '이메일과 패스워드를 입력해주세요');
      return;
    }
    if (isSignUp && password !== confirmPassword) {
      Alert.alert('실패', '비밀번호가 일치하지 않습니다.');
      return;
    }

    setLoading(true);
    try {
      const {user} = isSignUp ? await signUp(info) : await signIn(info);
      console.log('SignInScreen ::', user);
      const profile = await getUser(user.uid);
      console.log('profile===========', profile);
      if (!profile) {
        navigation.navigate('WelcomeScreen', {uid: user.uid});
      } else {
        //TODO:구현예정
        console.log(' //TODO:구현예정', profile);
      }
    } catch (e) {
      const message = {
        'auth/email-already-in-use': '이미 가입된 이메일입니다.',
        'auth/wrong-password': '잘못된 비밀번호입니다.',
        'auth/user-not-found': '존재하지 않는 계정입니다.',
        'auth/invalid-email': '유효하지 않은 이메일 주소입니다',
      };
      const msg = message[e.code] || `${isSignUp ? '가입' : '로그인'} 실패`;
      Alert.alert('실패', msg);
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.KeyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.fullScreen}>
        <View>
          <Text style={styles.text}>PublicGallery</Text>
        </View>
        <SignForm
          form={form}
          isSignUp={isSignUp}
          createChangeTextHandler={createChangeTextHandler}
          onSubmit={onSubmit}
        />
        <SignButton isSignUp={isSignUp} onSubmit={onSubmit} loading={loading} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
  s;
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
    color: 'black',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },

  KeyboardAvoidingView: {
    flex: 1,
  },
});
