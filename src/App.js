import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
  import Home from './screens/containers/Home'
  import {Header} from './sections/components/Header'
  import SuggestionList from './videos/containers/SuggestionList'
  import CategoryList from './videos/containers/CategoryList'
  import Movie from './screens/containers/Movie'
  import Search from './components/Search'
  import {getSuggestionList, getCategoryList} from './utils/Api'
  import {Player} from './player/containers/Player'

const AppLayout = (props) => {
      useEffect( () => {
    const getData = async () => {
      const suggestedList = await getSuggestionList()
      const categoriesList = await getCategoryList()
      // setMovieList(suggestedList) <--- Era para guardar la info en el estado
      // setCategoryList(categoriesList) <--- Era para guardar la info en el estado
      props.dispatch({
        type: 'SET_CATEGORY_LIST',
        payload: {
          categoriesList
        }
      })
      props.dispatch({
        type: 'SET_SUGGESTION_LIST',
        payload: {
          suggestedList
        }
      })
    }
    getData()
  }
  , [])



  if(props.selectedMovie){
    return <Movie/>
  }
  return (
    <Home>
    <Header/>
    <Search/>
    <Player/>
    <CategoryList/>
    <SuggestionList/>
 </Home>
  )
  
}
const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(AppLayout)