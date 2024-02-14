import React, {useEffect} from 'react';
import {View} from 'react-native';
import Profile from '../components/Profile';
import IconRightButton from '../components/IconRightButton';
import {useNavigation} from '@react-navigation/native';
import {useUserContext} from '../contexts/UserContext';
const MyProfileScreen = () => {
  const {user} = useUserContext();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: user.displayName,
      headerRight: () => (
        <IconRightButton
          name="settings"
          onPress={() => navigation.push('Setting')}
        />
      ),
    });
  }, [navigation, user]);

  return <Profile userId={user.id} />;
};

export default MyProfileScreen;
