import React from 'react'
import {Left, Right, Image, Container, Gender, GenderText , Title, Year, Rating } from './Suggestion.style'
import { TouchableOpacity } from 'react-native'
export const Suggestion = (props) => (
<TouchableOpacity onPress={props.onPress}>
    <Container>
        <Left>
            <Image source={{uri: props.medium_cover_image}}/>
            <Gender><GenderText>Accion</GenderText></Gender>
        </Left>
        <Right>
            <Title>{props.title}</Title>
            <Year>{props.year}</Year>
            <Rating>{props.rating}</Rating>
        </Right>
    </Container>
</TouchableOpacity>
)