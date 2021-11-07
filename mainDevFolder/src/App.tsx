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
  Anchor,
  PageHeader,
  Descriptions,
  Affix
} from 'antd'
const { Header, Content, Footer } = Layout
const { Link } = Anchor

import Home from './design/mainSite/components/Page/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './design/mainSite/components/Page/About'
import Contact from './design/mainSite/components/Page/Contact'
import {
  FacebookFilled,
  TwitterSquareFilled
} from '@ant-design/icons'

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

          <PageHeader
            title={<h2>KCM</h2>}
            subTitle='INC'
            extra={[<Button key='3'>Operation</Button>]}
          ></PageHeader>
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
        KCM INC EST.2016 <a href="tel:+4047400093">404-740-0093</a>

        <FacebookFilled />
        <TwitterSquareFilled />
      </Footer>
    </Layout>
  )
}

export default App
