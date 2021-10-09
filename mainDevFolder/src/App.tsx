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
  Typography,
  Layout,
  Menu
} from 'antd'
const { Header, Content, Footer } = Layout

import Home from './design/mainSite/components/Page/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './design/mainSite/components/Page/About'
import Contact from './design/mainSite/components/Page/Contact'

const App = () => {

  let key: number | boolean = window.innerWidth
  let newMenu = () => {
    if(( key >= 280 && key <= 768 )){
        return (
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
              <Menu.Item key='1'>cell</Menu.Item>
            </Menu>
          )        
      } else  {
        return (
            
            <Menu  mode='horizontal' defaultSelectedKeys={['1']}>
              <Menu.Item key='1'>Home</Menu.Item>
              <Menu.Item key='2'>Services</Menu.Item>
              <Menu.Item key='3'>Solutions</Menu.Item>
              <Menu.Item key='4'>Clients</Menu.Item>
              <Menu.Item key='5'>Contact</Menu.Item>
            </Menu>
          )      
      }
  }


  return (
    <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background:'white' }}>
          <div className='logo' />
          {newMenu()}
        </Header>
        <Content
          className='site-layout'
        >
        
        <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path = '/contact' component = {Contact} />
      </Switch>
    </Router>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    
  )
}

export default App
