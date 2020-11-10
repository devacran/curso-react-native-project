import React from 'react'
import {Container, Overlay, Video} from './PlayerControls.styles'
export const PlayerControls = (props) => (
    <Container>
        {/* {props.children} */}
        {props.controls}
    </Container>
)