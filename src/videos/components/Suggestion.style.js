import styled from 'styled-components/native'

export const Container = styled.View `
flex-direction: row;
`

export const Left = styled.View `

`
export const Right = styled.View `
padding-left: 10px;
justify-content: space-between;
`

export const Image = styled.Image `
height: 150px;
width: 100px;
resizeMode: contain;
`

export const Gender = styled.View `
position: absolute;
left: 0;
top: 0;
paddingVertical: 5px
paddingHorizontal: 7px
background-color: black;
`
export const GenderText = styled.Text `
font-size: 11px;
color: white
`
export const Title = styled.Text `
font-size: 18px;
color: #44546b
`
export const Year = styled.Text `
background-color: #70b124
paddingVertical: 4px;
paddingHorizontal: 6px;
color: white;
font-size: 11px;
border-radius: 5px;
overflow: hidden;
width: 40px;
`
export const Rating = styled.Text `
color: #6b6b6b;
fontSize: 14px;
fontWeight: bold;

`