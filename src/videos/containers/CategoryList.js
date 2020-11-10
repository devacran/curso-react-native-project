import React, { Component } from 'react';

import { FlatList} from 'react-native';

import {CategoryListLayout} from '../components/CategoryListLayout';
import {Empty} from '../../components/Empty'
import {HorizontalSeparator} from '../../components/HorizontalSeparator'
import {Category} from '../components/Category'
import { connect } from 'react-redux'

class CategoryList extends Component {

    renderEmpty = () => (<Empty content='No hay nimares'/>)
    renderItem = ({item}) => (<Category {...item}/>)
    itemSeparator = () => (<HorizontalSeparator/>)
    keyExtractor = (item) => item.id.toString() //Esto es para ponerle un key a la lista. Y siempre tiene que ir y tiene que estar en formato de texto
    render () {
      const  list =  this.props.list
      return (
        <CategoryListLayout title='Categorias'>
             <FlatList data={list} 
             horizontal
             keyExtractor={this.keyExtractor}
             ListEmptyComponent={this.renderEmpty} 
             ItemSeparatorComponent={this.itemSeparator}
             renderItem={this.renderItem}/>
        </CategoryListLayout>
      )
    }
    
}
const mapStateToProps = (state) => {
  return {
    list: state.categoriesList
  }
}
export default connect(mapStateToProps)(CategoryList)

//Para poner listas se usa el componente Flat List de React Components, en data={list} se pone la informacion y 
//en renderItem se itera la lista y se renderiza
//ListEmptyComponent es para que renderize un elemento cuando la lista esta vacia
//ItemSeparatorComponent es un componente que va entre cada elemento de la lista