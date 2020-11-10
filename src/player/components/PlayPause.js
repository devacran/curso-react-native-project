import {Button, Container} from './PlayPause.styles'
export const PlayPause = (props) => {
    return(
        <Container style={style.container} onPress={props.onPress}>
            {props.paused ? <Button>Play</Button> :  <Button>Pause</Button> }
        </Container>
    )
}