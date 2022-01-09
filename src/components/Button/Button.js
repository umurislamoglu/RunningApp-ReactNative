import React from 'react'
import { Text , TouchableOpacity } from 'react-native'
import styles from './Button.styles'

export default function Button({title , theme="default" , ...rest}) {
    return (
        <TouchableOpacity style={styles[theme].container} {...rest}>
            <Text style={styles[theme].title} > {title}</Text>
        </TouchableOpacity>
    )
}
