import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 150,
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
  dataView: {
    flexDirection:'column',
    marginLeft: 20,
    justifyContent:'flex-start',
  },
  dateStyle: {
    fontSize: 20,
    color: '#000',
    marginBottom:30
  },
  distanceStyle: {
    fontSize: 20,
    color: '#000',
  },
  weatherView: {
    marginRight: 20,
  },
  imageStyle: {
    height: 75,
    aspectRatio: 1,
    
  },
  temperatureStyle: {
    fontSize: 20,
    color: '#000',
    justifyContent: 'center',
    alignSelf: 'center',
    
  },
});
