import React, {useState} from 'react';
import {SafeAreaView, Image, Text , View} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {useNavigation} from '@react-navigation/native';
import routes from '../../navigation/routes';
import styles from './Login.styles';
import {onLogin} from '../../utils/firebaseUtils';

export default function Login() {
  const navigation = useNavigation();

  const [loginData, setLoginData] = useState({email: '', password: ''});

  const handleLogin = () => {
    if (loginData.email === '' || loginData.password === '') {
      return;
    }
    onLogin(loginData);
  };

  const onRegisterPress = () => {
    navigation.navigate(routes.REGISTER);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.overlay}>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/images/loginimg.jpg')}
      />
      </View>

      <View style={styles.titleContainer}>
      <Text style={styles.headerStyle}>Start Running</Text>
      <Text style={styles.textStyle}>Please sign in to continue.</Text>
      </View>
      <Input
        label="Email"
        autoCapitalize="none"
        onChangeText={email => setLoginData({...loginData, email})}
      />
      <Input
        label="Password"
        secureTextEntry
        onChangeText={password => setLoginData({...loginData, password})}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" theme="outline" onPress={onRegisterPress} />
     
    </SafeAreaView>
  );
}
