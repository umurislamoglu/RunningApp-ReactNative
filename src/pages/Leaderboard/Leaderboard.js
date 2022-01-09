import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector } from 'react-redux';
import styles from './Leaderboard.styles';
import LeaderBoardItem from '../../components/LeaderBoardItem';


export default function Leaderboard() {
  const [orderedList, setOrderedList] = useState([]);
  const allUsers = useSelector(state => state.allUsers.allUsers);



  useEffect(() => {
    let sortedAllUsers = allUsers.sort(function (a, b) {
      return b.totalDistance - a.totalDistance;
    });
    let ordered = [];
    sortedAllUsers.forEach((user, idx) => {
      ordered.push({...user, order: idx + 1});
    });
    if (ordered.length > 50) {
      ordered = ordered.slice(0, 50);
    }
    setOrderedList(ordered);
  }, []);

  const renderItem = ({item}) => <LeaderBoardItem user={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerStyle}>Leaderboard</Text>
      </View>
      {orderedList && (
        <FlatList
          data={orderedList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
}
