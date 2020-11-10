import React, {useState} from 'react'
import {ActivityIndicator } from 'react-native'
import {PlayerVideo} from './Player.styles'
import {Layout} from '../components/Layout'
import {PlayerControls} from '../components/PlayerControls'
import {PlayPause} from '../components/PlayPause'
export const Player = () => {
    [loading, setLoading] = useState(false)
    const onBuffer = () => {
        setLoading = true
    }
    const playPause = () => {
    }
    return (
        <Layout loading={loading} loader={<ActivityIndicator color='red'/>}>
             <PlayerVideo source={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}} 
             onBuffer={onBuffer}
             controls={true}
             resizeMode='contain' />
        </Layout>
       
    )
}
