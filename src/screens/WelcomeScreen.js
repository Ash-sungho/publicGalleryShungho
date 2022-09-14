import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SetupProfile from '../components/SetupProfile';

const WelcomeScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ios: 'padding'})}
      style={styles.avoidingView}>
      <SafeAreaView style={styles.block}>
        <View>
          <Text style={styles.title}>환영합니다!</Text>
          <Text style={styles.description}>프로필을 설정하세요.</Text>
        </View>
        <SetupProfile />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  avoidingView: {
    flex: 1,
  },
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
  },
  description: {
    marginTop: 16,
    fontSize: 21,
    color: '#757575',
  },
  circle: {
    backgroundColor: '#cdcdcd',
    borderRadius: 64,
    width: 128,
    height: 128,
  },
});
