import React from 'react'
import {Container, Loader} from './Loading.styles'
export const Loading = () => (
    <Container>
        <Loader source={require('../assets/logo.png')}/>
    </Container>
)