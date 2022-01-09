import React from 'react'
import { View, Text } from 'react-native'
import styles from './DashboardItem.styles'

export default function DashboardItem({title , value}) {
    return (
        <View style={styles.itemStyle}>
            <Text style={styles.labelStyles}>{title}:</Text>
            <Text style={styles.valueStyles}>{value}</Text>
        </View>
    )
}
