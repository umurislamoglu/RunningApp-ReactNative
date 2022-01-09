import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Input.styles'

export default function Input({label, ...rest}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
                <TextInput style={styles.input} {...rest}/>
            </View>
        </View>
    )
}
