import React from 'react'
import {connect} from 'react-redux'
import {MovieLayout} from '../components/MovieLayout'
import {Close} from '../../components/Close'
import {Details} from '../../player/components/Details'
import {Text} from 'react-native'
import {Header} from '../../sections/components/Header'
const Movie = (props) => {

    const handleClose = () => {
        props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: null,
            }
        })
    }
    return(
        <MovieLayout>
            <Header><Close onPress={handleClose}/></Header>
            <Text>Aqui va a ir el player</Text>
            <Details {...props.movie} />
        </MovieLayout>
    )
}

const mapDispatchToProps = (state) => ({
 movie: state.selectedMovie
})
export default connect(mapDispatchToProps)(Movie)