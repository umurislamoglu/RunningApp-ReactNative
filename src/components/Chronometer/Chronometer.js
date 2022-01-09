import React, {useState, useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
import { formatTime } from '../../utils/utilityFunctions';
import styles from './Chronometer.styles';

export default function Chronometer({label, chronometerState, setTime}) {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  const increment = useRef(null);


  useEffect(() => {
    if (chronometerState) {
      setStart(true);
      increment.current = setInterval(() => {
        setTimer(timer => timer + 1);
        setTime(timer => timer + 1)
      }, 1000);
    }
    return () => {
      clearInterval(increment.current);
      setStart(false);
      setTimer(0);
      setTime(0)
    };
  }, [chronometerState]);

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyles}>{label}</Text>
      <Text style={styles.valueStyles}>{formatTime(timer)}</Text>
    </View>
  );
}
