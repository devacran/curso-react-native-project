import React from 'react'
import {Container, Text} from './Close.styles'


export const Close = (props) => {

    return(
        <Container onPress={props.onPress}>
            <Text>Cerrar</Text>
        </Container>
    )
}