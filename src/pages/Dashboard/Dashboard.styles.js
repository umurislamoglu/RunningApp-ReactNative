import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
  },
  margin: {
    marginHorizontal: 10,
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#fff'

  },
  headerStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom:10,
    color: '#000'

  },

  logoutButton: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: '100%',
  },

  imageStyle: {
    width: 150,
    aspectRatio: 1,
    alignSelf: 'center',
    borderRadius: 75,
    marginTop: 50,
    marginBottom: 50,
    
  },
  topDataContainer: {
    backgroundColor: '#F7C556'
  },

});
