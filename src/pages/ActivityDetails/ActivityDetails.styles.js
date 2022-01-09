import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#F7C556'

  },
  innerContainer: {
    flex: 1,
  },

  metricContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  metricBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: 15,
    flex: 1,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  weatherContainer: {
    height: 100,
    flexDirection: 'column',
  },
  headerStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageStyle: {
    height: 75,
    aspectRatio: 1,
  },
  valueStyle: {
    fontSize: 30,
    color: '#000',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  weatherView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
