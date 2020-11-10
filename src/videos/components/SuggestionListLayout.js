import React from 'react'
import {Title, Container} from './SuggestionListLayout.styles'

export const SuggestionListLayout = (props) => (
    <Container>
        <Title>{props.title}</Title>
        {props.children}
    </Container>
)
