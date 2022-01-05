import * as React from 'react'
import {
  Layout,
  Menu,
  Button,
  Drawer,
} from 'antd'
import Home from './design/mainSite/components/Page/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Health from './design/mainSite/components/Page/Health'
import Contact from './design/mainSite/components/Page/Contact'
import {
  FolderViewOutlined,
  HomeOutlined,
  MessageOutlined,
} from '@ant-design/icons'


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
            Solutions
          </Menu.Item>
          <Menu.Item
            key='faq'
          // icon={<QuestionOutlined style={{ color: '#009688' }} />}
          >
            FAQ
          </Menu.Item>
          <Menu.Item
            key='contact'
          >
            <Button icon={<MessageOutlined style={{ color: '#009688' }} />}>Contact Us</Button>
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
                <FolderViewOutlined
                  style={{ fontSize: '1.25rem', color: '#009688' }}
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

      {/* <Footer style={{
        zIndex: 1,
        width: '100%',
        background: '#fafafa'
      }}>
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
            Solutions
          </Menu.Item>
          <Menu.Item
            key='faq'
          // icon={<QuestionOutlined style={{ color: '#009688' }} />}
          >
            FAQ
          </Menu.Item>
          <Menu.Item
            key='contact'
          >
            <Button icon={<MessageOutlined style={{ color: '#009688' }} />}>Contact Us</Button>
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
                <FolderViewOutlined
                  style={{ fontSize: '1.25rem', color: '#009688' }}
                />
              }
            ></Button>
          </Menu.Item>
        </Menu>
      </Footer> */}
 
    </Layout>
  )
}

export default App
