import {StyleSheet} from 'react-native';

export default {
  default: StyleSheet.create({
    container: {
      backgroundColor: '#FFC300',
      margin: 5,
      padding: 10,
      borderRadius: 50,
      alignItems: 'center',
      alignSelf: 'center',
      width: '50%',
      
    },
    title: {
      fontWeight: 'bold',
      color: 'white',
    },
  }),
  outline: StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: '#FFC300',
      padding: 10,
      margin: 5,
      alignItems: 'center',
      borderRadius: 50,
      width: '50%',
      alignSelf: 'center',

    },
    title: {
      fontWeight: 'bold',
      color: '#FFC300',
    },
  }),
};
