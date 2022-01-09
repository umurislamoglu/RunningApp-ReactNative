import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 75,
    backgroundColor: '#FFC300',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
    color: '#fff',
    
  },
  containerHeader: {
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  numberStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  scoreStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
