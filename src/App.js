import { ReactChild, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './Page/Home/Home'
import Info from './Page/Home/Info'
import OrdedrOnline from './Page/OrderOnline/OrderOnline'
import Cart from './Page/Cart/Cart'
import Reserve from './Page/Reserve/Reserve'
import ButtomNav from './component/ButtomNavigation/BottomNav'
import { useProjectContext } from './context/ProjectProvider'
import SingleInfo from './Page/Home/SingleInfo'
import Comments from './Page/Home/Comments'
import { Cookies, useCookies } from 'react-cookie'
import axios from 'axios'
function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const { userData, setUserData } = useProjectContext()

  window.onload = function () {
    if (cookies['user']) {
      getIndividualInfo()
    }
  }
  const getIndividualInfo = () => {
    axios
      .post(
        'https://rest.negaapps.ir/admin/Customers/API/_customerInfo?token=test',
        {
          mobile: cookies['user']['mobile'],
        },
        {
          headers: {
            token: 'test',
          },
        }
      )
      .then((response) => {
        if (response.data.isDone) {
          setUserData(response.data.data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/:url'>
            <Home />
          </Route>
          <ButtomNav />
        </Switch>
        <Switch>
          <Route exact path='/info/:url'>
            <Info />
          </Route>
          <Route exact path='/singleInfo/:url'>
            <SingleInfo />
          </Route>
          <Route exact path='/reviews/:url'>
            <Comments />
          </Route>
          {/* <Route exact path='/orderonline/:url'>
            <OrdedrOnline />
          </Route> */}
          <Route exact path='/info/:url/:searchVal'>
            {/* <OrdedrOnline /> */}
            <Info />
          </Route>
          {/* <Route exact path='/reserve/:url'>
            <Reserve />
          </Route> */}
          <Route exact path='/cart/:url/:orderType'>
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
