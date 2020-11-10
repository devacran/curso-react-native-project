import {ReactVideo, Container} from './Video.styles'
import React from 'react'
export const Video = () => (
    <Container>

<ReactVideo source ={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}/>
    </Container>
)