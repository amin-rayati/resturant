import { ReactChild, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './Page/Home/Home'
import Info from './Page/Home/Info'
import OrdedrOnline from './Page/OrderOnline/OrderOnline'
import AddProperty from './Page/OrderOnline/AddProperty'
import Cart from './Page/Cart/Cart'
import Reserve from './Page/Reserve/Reserve'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/:url'>
            <Home />
          </Route>
          <Route exact path='/:url/info'>
            <Info />
          </Route>
          <Route exact path='/:url/orderonline'>
            <OrdedrOnline />
          </Route>
          <Route exact path='/:url/orderonline/:searchVal'>
            <OrdedrOnline />
          </Route>
          <Route exact path='/:url/reserve/:id'>
            <Reserve />
          </Route>
          <Route exact path='/:url/cart'>
            <Cart />
          </Route>
          {/* <Route exact path='/ordernline/addproperty'>
            <AddProperty />
          </Route> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
