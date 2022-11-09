import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ShowMore({ showMore, children }) {
    return (
        <View 
            style={{maxHeight: showMore ? undefined : 0, overflow: 'hidden'}}
        >
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#f1f1f1',
        opacity: 0.7,
        textAlign: 'justify',
      },
})