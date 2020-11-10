import React from 'react'
import {Container, Title} from './Category.style'
export const Category = (props) => (
    <Container source={{uri: props.background_image}}>
        <Title>{props.genres[0]}</Title>
    </Container>
)