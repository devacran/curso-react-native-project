import React from 'react'
import {Title, Container} from './CategoryListLayout.styles'

export const CategoryListLayout = (props) => (
<Container source={require('../../assets/background.png')}>    
        <Title>{props.title}</Title>
        {props.children}

</Container>
)
