import React, {useState} from 'react'
import {Input} from './Search.styles'
import {searchMovie} from '../utils/Api'
import {connect} from 'react-redux'

const Search = (props) => {

    const [inputText, setInputText ] = useState('')
    const handleSubmit = async () => {
        const movie = await searchMovie(inputText)
        props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: movie[0]
            }
        })
    }
    const handleChangeText = (text) => {
        setInputText(text)
    }
    return(
        <Input
            placeholder="Busca tu pelicula favorita"
            autoCorrect={false}
            underlineColorAndroid={'transparent'}
            onSubmitEditing={handleSubmit}
            onChangeText={handleChangeText}
        />
    )
}
export default connect(null)(Search)