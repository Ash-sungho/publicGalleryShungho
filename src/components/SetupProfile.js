import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {IMAGE} from '../assets/Constants';
import useUserContext from '../contexts/UserContext';
import {signOut} from '../lib/auth';
import {createUser} from '../lib/users';
import BorderInput from './BorderInput';
import CustomButton from './CustomButton';
import storage from '@react-native-firebase/storage';

const SetupProfile = () => {
  const [displayName, setDisplayName] = useState('');
  const navigation = useNavigation();
  const {setUser} = useUserContext();
  const {params} = useRoute();
  const {uid} = params || {};
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {user} = useUserContext();
  const onSubmit = async () => {
    setIsLoading(true);
    let photoURL = null;
    if (response) {
      const asset = response.assets[0];
      const extention = asset.fileName.split('.').pop(); //확장자추출
      const reference = storage().ref(`/profile/${uid}.${extention}`);
      if (Platform.OS === 'android') {
        await reference.putString(asset.base64, 'base64', {
          contentType: asset.type,
        });
      } else {
        await reference.putFile(asset.uri);
      }
      photoURL = response ? await reference.getDownloadURL() : null;
    }

    const user = {
      id: uid,
      displayName: displayName,
      photoURL: photoURL,
    };
    createUser(user);
    setUser(user);
    if (user) {
      setIsLoading(false);
      navigation.navigate('MainTab');
    }
  };
  const onCancel = () => {
    signOut();
    navigation.goBack();
  };
  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.select({android: true}),
      },
      res => {
        if (res.didCancel) {
          return;
        }
        setResponse(res);
      },
    );
  };

  return (
    <View style={styles.block}>
      <Pressable onPress={onSelectImage}>
        <Image
          style={styles.circle}
          source={response ? {uri: response?.assets[0]?.uri} : IMAGE.USER}
        />
      </Pressable>
      {/* <View style={styles.circle} /> */}
      <View style={styles.form}>
        <BorderInput
          placeholder="닉네임"
          value={displayName}
          onChangeText={setDisplayName}
          onSubmitEditing={onSubmit}
          returnKeyType="next"
        />
        {isLoading ? (
          <ActivityIndicator size={32} color="#6200ee" style={styles.spinner} />
        ) : (
          <View style={styles.buttons}>
            <CustomButton title="다음" onPress={onSubmit} hasMarginBottom />
            <CustomButton title="취소" onPress={onCancel} theme="secondary" />
          </View>
        )}
      </View>
    </View>
  );
};

export default SetupProfile;

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 16,
    width: '100%',
  },
  circle: {
    backgroundColor: '#cdcdcd',
    borderRadius: 64,
    width: 128,
    height: 128,
  },
  form: {
    marginTop: 16,
    width: '100%',
  },
  buttons: {
    marginTop: 48,
  },
  spinner: {
    marginTop: 48,
    height: 104,
  },
});
