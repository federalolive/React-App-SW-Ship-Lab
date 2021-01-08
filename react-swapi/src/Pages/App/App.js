import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import StarshipList from '../StarshipList/StarshipList'
import StarshipDetail from '../StarshipDetail/StarshipDetail'

function App() {
  return (
      <>
      <Route 
          exact path = '/'
          render = {() => <StarshipList />}
      />
      <Route 
      exact path = '/details'
      render = {({location}) =>
          <StarshipDetail location = {location} />
      }
      />
      </>
  )
}

export default App;
