import { ReactChild, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-image-gallery/styles/css/image-gallery.css'

import Home from './Page/Home/Home'
import Info from './Page/Home/Info'
import OrdedrOnline from './Page/OrderOnline/OrderOnline'
import Cart from './Page/Cart/Cart'
import Reserve from './Page/Reserve/Reserve'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/info'>
            <Info />
          </Route>
          <Route exact path='/OrdedrOnline'>
            <OrdedrOnline />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/reserve'>
            <Reserve />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
