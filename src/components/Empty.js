import React from 'react'
import {Container, Content} from './Empty.styles'


export const Empty = (props) => (
    <Container>
        <Content>{props.content}</Content>
    </Container>
)