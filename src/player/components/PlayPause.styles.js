import {TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'

import styled from 'styled-components/native'

export const Container = styled(TouchableHighlight)`
justify-content: center;
padding-horizontal: 10px;
height: 25px;
margin-right: 10px
margin-vertical: 5px;
border-width: 1px;
border-radius: 10px;
border-color: white;
background-color: gray;
`
export const Button = styled.Text`
color: white;
fontSize: 10;
fontWeight: bold;
`



