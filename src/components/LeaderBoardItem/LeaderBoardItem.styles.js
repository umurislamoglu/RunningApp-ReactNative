import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  numberStyles: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000'

  },
  textStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'

  },
  scoreStyles: {
    fontSize: 20,
    marginRight: 10,
    color: '#000'

  },
});
