import { View, Text, StyleSheet } from 'react-native'
import VideoPlayer from 'react-native-video-player'
import React from 'react'
import TitleInformation from './TitleInformation'

export default function Play() {
  return (
    <View style={styles.body}>
      <VideoPlayer 
        video={{ uri: '' }}
        videoHeight={800}
        thumbnail={{ uri: 'https://c4.wallpaperflare.com/wallpaper/366/904/933/satoru-gojo-yuji-itadori-megumi-fushiguro-jujutsu-kaisen-hd-wallpaper-preview.jpg' }}
        showDuration={true}
      />
      
      <TitleInformation />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },

})