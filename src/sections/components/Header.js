import React from 'react'
import {
  SafeAreaView,
    View,
    StyleSheet
  } from 'react-native';
import {Logo} from '../../components/Logo'
import {Container} from './Header.styles'
export const Header = (props ) => (
    <Container>
      <SafeAreaView>
       <Logo/>
      </SafeAreaView>
        {props.children ?       <View style={styles.right}>
        {props.children}
      </View> : null}
    </Container>
)

const styles = StyleSheet.create({
  right: {
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})