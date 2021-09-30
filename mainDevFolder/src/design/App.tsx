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
import Home from './mainSite/components/Page/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './mainSite/components/Page/About'

const App: React.FC = () => {
  const [old, setNew] = React.useState()

  React.useEffect(() => {
    ;(async () => {
      const data = await fetch('http://localhost:4000')
      const newData = await data.json()
      setNew(newData)
    })()
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  )
}

export default App
