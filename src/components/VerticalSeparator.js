import React from 'react'
import {View, StyleSheet} from 'react-native'



export const VerticalSeparator = (props) => (<View style={styles.separator}/>)

const styles = {
    separator: {
        borderTopWidth: 1,
        borderColor: 'lightgray',
    }
}