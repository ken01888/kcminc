import * as React from 'react'
import fetch from 'isomorphic-fetch'
import {
  Button,
  Calendar,
  Col,
  Divider,
  List,
  Row,
  Space,
  Typography
} from 'antd'
import Home from './design/mainSite/components/Page/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './design/mainSite/components/Page/About'
import Contact from './design/mainSite/components/Page/Contact'

const App = () => {



  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path ='/contact' component = {Contact} />
      </Switch>
    </Router>
  )
}

export default App
