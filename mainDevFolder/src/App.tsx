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
  Menu,
  Anchor
} from 'antd'
const { Header, Content, Footer } = Layout
const { Link } = Anchor

import Home from './design/mainSite/components/Page/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './design/mainSite/components/Page/About'
import Contact from './design/mainSite/components/Page/Contact'

const App = () => {
  let key: number | boolean = window.innerWidth
  let newMenu = () => {
    if (key >= 280 && key <= 768) {
      return (
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key='1'>cell</Menu.Item>
        </Menu>
      )
    } else {
      return (
        <React.Fragment>
          {/* <Row>
            <Col span={24}>
              fds
            </Col>
          </Row> */}
          <Menu
            mode='horizontal'
            defaultSelectedKeys={['1']}
            className='navbar'
          >
            <Menu.Item key='1'>
              <a href='/' target='_self' rel='noopener noreferrer'>
                KCM INC
              </a>
            </Menu.Item>
            <Menu.Item key='2'>
              <a href='/' target='_self' rel='noopener noreferrer'>
                Services
              </a>
            </Menu.Item>
            <Menu.Item key='3'>
              <a href='/' target='_self' rel='noopener noreferrer'>
                Solutions
              </a>
            </Menu.Item>
            <Menu.Item key='4'>
              <a href='/' target='_self' rel='noopener noreferrer'>
                About
              </a>
            </Menu.Item>
            
            <Menu.Item key='5'>
              <a href='/' target='_self' rel='noopener noreferrer'>
                <Button type='primary'>Contact</Button>
              </a>
            </Menu.Item>
          </Menu>
        </React.Fragment>
      )
    }
  }

  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          background: 'white'
        }}
      >
        <div className='logo' />
        {newMenu()}
      </Header>
      <Content className='site-layout'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Router>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: 'white' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default App
