import React from 'react'

import {Image, Container} from './Logo.styles'

export const Logo = () => (
    <Container>
        <Image source={require('../assets/logo.png')}></Image>
    </Container>
)