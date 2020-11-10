/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  Text, StyleSheet,
} from 'react-native';
import Home from './src/screens/containers/Home'
import {Header} from './src/sections/components/Header'
import SuggestionList from './src/videos/containers/SuggestionList'
import CategoryList from './src/videos/containers/CategoryList'
import {Loading} from './src/components/Loading'
import {getSuggestionList, getCategoryList} from './src/utils/Api';
// import {Video} from './src/components/Video'
// import Video from 'react-native-video';
import {Provider } from 'react-redux'
import {PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store'
import AppLayout from './src/App'
const App: () => React$Node = () =>  {

  // const [movieList, setMovieList] = useState([])
  // const [categoryList, setCategoryList] = useState([])


  return (
<Provider store={store}>
    <PersistGate loading={<Loading/>} persistor={persistor}>
     <AppLayout/>
    </PersistGate>
</Provider>
  )
}
export default App

