import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
  },
  input_container: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  label: {
    fontWeight: 'bold',
    color:'#000'
  },
  input: {
    padding: 5,
    color:'#000'
  },
});
