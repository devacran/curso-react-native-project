import React from 'react'
import {Container, VideoContainer,Overlay} from './Layout.styles'
export const Layout = (props) => {
    return(
        <Container>
         <VideoContainer>
             {props.children}
          </VideoContainer>
{props.loading &&         <Overlay>
        {props.loader}
        </Overlay>}
        </Container>
    )
}
