import { View, Text, StyleSheet, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import React from 'react'

export default function ShowMore({ showMore, children }) {
    return (
        <View
            style={{ maxHeight: showMore ? undefined : 44, overflow: 'hidden', position: 'relative' }}
        >
            <Text style={[styles.text]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#808080',
        textAlign: 'justify',
    },
})