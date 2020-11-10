import React, { Component } from 'react';

import { FlatList} from 'react-native';

import {SuggestionListLayout} from '../components/SuggestionListLayout';
import {Empty} from '../../components/Empty'
import {VerticalSeparator} from '../../components/VerticalSeparator'
import {Suggestion} from '../components/Suggestion'
import { connect } from 'react-redux'

class SuggestionList extends Component {

    renderEmpty = () => (<Empty content='No hay nimares'/>)
    renderItem = ({item}) => (<Suggestion onPress={() => this.handlePress(item)} {...item}/>)
    itemSeparator = () => (<VerticalSeparator/>)
    keyExtractor = (item) => item.id.toString() //Esto es para ponerle un key a la lista. Y siempre tiene que ir y tiene que estar en formato de texto
    handlePress = (item) => {
      this.props.dispatch({
        type: 'SET_SELECTED_MOVIE',
        payload: {
          movie: item
        }
      })


    }
    render () {
      const  list =  this.props.list
      return (
        <SuggestionListLayout title='Recomendado para ti'>
             <FlatList data={list} 
             keyExtractor={this.keyExtractor}
             ListEmptyComponent={this.renderEmpty} 
             ItemSeparatorComponent={this.itemSeparator}
             renderItem={this.renderItem}/>
        </SuggestionListLayout>
      )
    }
    
}
const mapStateToProps = (state) => {
  return {
    list: state.suggestedList
  }
}
export default connect(mapStateToProps)(SuggestionList)

//Para poner listas se usa el componente Flat List de React Components, en data={list} se pone la informacion y 
//en renderItem se itera la lista y se renderiza
//ListEmptyComponent es para que renderize un elemento cuando la lista esta vacia
//ItemSeparatorComponent es un componente que va entre cada elemento de la lista