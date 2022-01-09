import React, {useState} from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import Input from './../../components/Input';
import Button from './../../components/Button';
import styles from './Register.styles';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {onRegister} from '../../utils/firebaseUtils';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../redux/actions/userAuthActions';
import {setUserData} from '../../redux/actions/userDataActions';
import {setAllUsersData} from '../../redux/actions/allUsersActions';

export default function Register() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
  });

  const handleRegisterButton = () => {
    if (registerData.password !== registerData.repassword) {
      Alert.alert('Running App', 'Passwords are not matched');
      return;
    }

    if (
      registerData.password === '' ||
      registerData.repassword === '' ||
      registerData.email === '' ||
      registerData.name === ''
    ) {
      Alert.alert('Running App', 'Fill all fields');
      return;
    } else {
      onRegister(registerData);
      dispatch(loginUser);
      dispatch(setUserData);
      dispatch(setAllUsersData);
    }
  };

  const handleReturnToLogin = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.overlay}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/registerimg.jpg')}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.headerStyle}>Create an Account</Text>
        <Text style={styles.textStyle}>Please sign up to continue.</Text>
      </View>
      <Input
        label="Name"
        onChangeText={name => setRegisterData({...registerData, name})}
      />
      <Input
        label="Email"
        autoCapitalize="none"
        onChangeText={email => setRegisterData({...registerData, email})}
      />
      <Input
        label="Password"
        secureTextEntry
        onChangeText={password => setRegisterData({...registerData, password})}
      />
      <Input
        label="Password Again"
        secureTextEntry
        onChangeText={repassword =>
          setRegisterData({...registerData, repassword})
        }
      />
      <Button title="Register" onPress={handleRegisterButton} />
      <Button title="Back" theme="outline" onPress={handleReturnToLogin} />
    </SafeAreaView>
  );
}
