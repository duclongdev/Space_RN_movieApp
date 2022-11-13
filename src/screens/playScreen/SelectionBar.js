import { View, Text, StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react'

export default function SelectionBar({ like }) {
    const [status1, setStatus1] = useState(false);
    const [status2, setStatus2] = useState(false);
    const [current, setCurrent] = useState(0);

    const handler = () => {
        if (current === 1) {
            setStatus1(true);
            setStatus2(false);
        }
        else {
            setStatus1(false);
            setStatus2(true);
        }
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 16 }}>
            <Pressable style={[{ flexDirection: 'row', alignItems: 'center' }]} onPressIn={() => setStatus1(!status1)}>        
                <Icon name={status1 ? 'thumb-up' : 'thumb-up-outline'} color={status1 ? '#16C60C' : '#f1f1f1'} size={18} />
            </Pressable>
            <Text style={[styles.textbutton, { fontSize: 16, color: status1 ? '#16C60C' : '#f1f1f1' }]}>{like}</Text>

            <Pressable onPressIn={() => setStatus2(!status2)}>              
                <Icon name={status2 ? 'thumb-down' : 'thumb-down-outline'} color={status2 ? '#16C60C' : '#f1f1f1'} size={18} style={{ marginHorizontal: 18 }} />
            </Pressable>

            <Pressable>
                <Icon name='comment-text-outline' color={'#f1f1f1'} size={18} style={{ marginHorizontal: 8 }} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    textbutton: {
        fontSize: 18,
        fontWeight: '500',
        color: '#f1f1f1',
        paddingHorizontal: 8,
        textAlign: 'justify'
    },
})