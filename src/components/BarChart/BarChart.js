import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './BarChart.styles';
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
} from 'victory-native';

export default function BarChart({distancePerTime}) {
  let barChartData = [
    {x: 0, y: 0},
    {x: 1, y: distancePerTime[0]},
    {x: 2, y: distancePerTime[1]},
    {x: 3, y: distancePerTime[2]},
    {x: 4, y: distancePerTime[3]},
  ];

  return (
    <View style={styles.container}>
      <VictoryChart width={200} height={200} theme={VictoryTheme.material}>
        <VictoryAxis tickValues={[0, 1, 2, 3, 4]} />
        <VictoryAxis dependentAxis />
        <VictoryBar data={barChartData} />
      </VictoryChart>
    </View>
  );
}
