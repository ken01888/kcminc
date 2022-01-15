import * as React from 'react'
import { Layout, Menu, Button, Drawer, Row, Col } from 'antd'
import Home from './design/mainSite/components/Page/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Health from './design/mainSite/components/Page/Health'
import Contact from './design/mainSite/components/Page/Contact'
import {
  FacebookFilled,
  FacebookOutlined,
  FolderViewOutlined,
  HomeOutlined,
  LinkedinOutlined,
  MenuOutlined,
  MessageOutlined,
  TwitterCircleFilled,
  TwitterOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'

const { Header, Content, Footer } = Layout

const App = () => {
  const [visible, setVisible] = React.useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          background: '#fafafa'
        }}
      >
        <Menu mode='horizontal' className='largeDisplay'>
          <Menu.Item
            key='home'
            // icon={<HomeOutlined style={{ color: '#009688' }} />}
          >
            KCM INC
          </Menu.Item>
          <Menu.Item
            key='solutions'
            // icon={<BulbOutlined style={{ color: '#009688' }} />}
          >
            Solutions <a href='#solutions'></a>
          </Menu.Item>
          <Menu.Item
            key='faq'
            // icon={<QuestionOutlined style={{ color: '#009688' }} />}
          >
            <a href='#faq'> FAQ</a>
          </Menu.Item>
          <Menu.Item key='contact'>
            <Button icon={<MessageOutlined style={{ color: '#b88623' }} />}>
              Contact Us
            </Button>
          </Menu.Item>
        </Menu>
        <Menu mode='horizontal' className='smallDisplay'>
          <Menu.Item key='home' icon={<HomeOutlined />}>
            KCM INC
          </Menu.Item>
          <Menu.Item key='solutions'>
            <Button
              type='dashed'
              onClick={showDrawer}
              icon={
                <MenuOutlined
                  style={{ fontSize: '1.25rem', color: '#b88623' }}
                />
              }
            ></Button>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className='site-layout'>
        <Drawer
          title='Basic Drawer'
          placement='left'
          onClose={onClose}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/health' component={Health} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Router>
      </Content>

      <Footer
        style={{
          zIndex: 1,
          width: '100%',
          background: '#b88623'
        }}
      >
        <Row justify='space-around'>
          <Col xs={24} md={7} className='footer'>
            <h1>Contact</h1>
            <a href='tel:+1 404-585-7482'>+1 404-585-7482</a>
            <a href='mailto:ken@kcminc.io'>ken@kcminc.io</a>
          </Col>

          <Col xs={24} md={7} className='footer'>
            <h1>Connect</h1>
            <a href='http://'>
              <TwitterOutlined className='icon' />
              Twitter
            </a>
            <a href='http://'>
              <FacebookOutlined className='icon' />
              Facebook
            </a>
            <a href='http://'>
              <LinkedinOutlined className='icon' />
              Linkedin
            </a>
          </Col>

          <Col xs={24} md={7} className='footer'>
            <h1>Purpose and Process</h1>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}

export default App
