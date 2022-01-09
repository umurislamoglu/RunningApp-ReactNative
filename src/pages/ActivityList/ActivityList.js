import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import ActivityItem from './../../components/ActivityItem';
import styles from './ActivityList.styles'
import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes'
import LottieView from 'lottie-react-native';


export default function ActivityList() {

const navigation = useNavigation()

  const userData = useSelector(state => state.userData.userData);

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    let list = [];
    if (userData.activities) {
      userData.activities.forEach((element, idx) => {
        let data = {...element, id: idx};
        list.push(data);
      });
      let sortedList = list.sort(function (a, b) {
        return b.activityDate - a.activityDate;
      });

      setActivities(sortedList)
    }
  }, [userData]);



  
  const renderItem = ({item}) => (
    <TouchableOpacity onPress = {() => navigation.navigate(routes.DETAIL_PAGE, {activity: item})} >
    <ActivityItem activity={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <Text style={styles.headerStyle}>Activities</Text>
      </View>
      {activities.length > 0  ? (
        <FlatList
          data={activities}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ): (
        <LottieView
          style={styles.lottie}
          source={require('../../assets/lottie/empty.json')}
          autoPlay
          loop
        />
      ) }
     
    </View>
  );
}
