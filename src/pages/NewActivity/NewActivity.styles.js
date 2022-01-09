import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mapViewStyle: {
    flex: 1,
    zIndex: -1,
  },
  bottomViewStyle: {
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  metricViewStyles: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  floatingButton : {
    position: 'absolute',
    bottom: 50,
    zIndex: 10,
    width: '100%'
  },
  stopButton : {
    position: 'absolute',
    bottom: 10,
    zIndex: 10,
    width: '100%'
  }

});
