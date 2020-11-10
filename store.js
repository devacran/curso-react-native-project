import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist' //Para la conexion offline
import {reducer} from './reducers/videos'
import storage from 'redux-persist/lib/storage'

// const store = createStore(videos, {   
//     suggestedList: [],           <-------- esto era antes cuando no habia conexion offline
//     categoriesList: []           
// })

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['selectedMovie'] //Aqui van los keys del store que NO queremos persistir
  }
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer) // <--- La nueva store para el modo offline
export const persistor = persistStore(store)

