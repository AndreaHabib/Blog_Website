import React, { Component } from 'react'
import NavBar from './components/NavBar'
import ShoppingList from './components/ShoppingList'
import { Container } from 'reactstrap'
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ItemModal from './components/ItemModal'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
         <Container>
          <ItemModal />
          <ShoppingList />
          </Container>
        </div>
      </Provider>
    )
  }
}
