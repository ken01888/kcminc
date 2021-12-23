import * as React from 'react'
import {  Layout,Menu,Anchor,Row,Col, PageHeader, Button} from 'antd'
import Home from './design/mainSite/components/Page/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Health from './design/mainSite/components/Page/Health'
import Contact from './design/mainSite/components/Page/Contact'
import {AppstoreOutlined, FacebookFilled,MailOutlined,TwitterSquareFilled} from '@ant-design/icons'
import Nutrition from './design/mainSite/components/Page/Nutrition'
import Nutrition2 from './design/mainSite/components/Page/Nutrition2'
import Nutrition3 from './design/mainSite/components/Page/Nutrition3'


const { Header, Content, Footer } = Layout
const { Link } = Anchor

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
          <Row>
            <Col span={24}>
              fds
            </Col>
          </Row>

        
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
          background: '#fafafa'
        }}
      >
   <Menu  mode="horizontal" className='largeDisplay'>
        <Menu.Item key="home" icon={<MailOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="solutions"  icon={<AppstoreOutlined />}>
         Solutions
        </Menu.Item>
        <Menu.Item key="faq"  icon={<AppstoreOutlined />}>
        FAQ
        </Menu.Item>
        <Menu.Item key="contact"  icon={<AppstoreOutlined />}>
         Contact us
        </Menu.Item>
       
      </Menu>
      </Header>
      <Content className='site-layout'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/health/nutritionalanalysis/3' component={Nutrition3} />
            <Route path='/health/nutritionalanalysis/2/:client' component={Nutrition2} />
            <Route path='/health/nutritionalanalysis' component={Nutrition} />
            <Route path='/health' component={Health} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Router>
      </Content>

      <Footer style={{ backgroundColor: '#009688',width:'auto' }}>
        <Row>
{/* <Col xs={24} md={8}>
  d
</Col>
<Col xs={24} md={8}>
  d
</Col>
<Col xs={24} md={8}>
  d
</Col> */}

        </Row>
        KCM INC EST.2016 <a href="tel:+4047400093">404-740-0093</a>
      


        <FacebookFilled />
        <TwitterSquareFilled />
      </Footer>
    </Layout>
  )
}

export default App
