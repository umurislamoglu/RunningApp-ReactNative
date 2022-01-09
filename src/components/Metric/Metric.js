import React from 'react'
import { View, Text } from 'react-native'
import styles from './Metric.styles.js'

export default function Metric({label,value}) {
    return (
        <View style={styles.container}>
            <Text style={styles.labelStyles}>{label}</Text>
            <Text style={styles.valueStyles}>{value}</Text>
        </View>
    )
}
