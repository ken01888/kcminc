import * as React from 'react'
import {  Layout,Menu,Anchor,Row,Col, PageHeader, Button, Drawer} from 'antd'
import Home from './design/mainSite/components/Page/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Health from './design/mainSite/components/Page/Health'
import Contact from './design/mainSite/components/Page/Contact'
import {AppstoreOutlined, BulbOutlined, FacebookFilled,FolderViewOutlined,HomeOutlined,MailOutlined,MessageOutlined,QuestionOutlined,TwitterSquareFilled} from '@ant-design/icons'
import Nutrition from './design/mainSite/components/Page/Nutrition'
import Nutrition2 from './design/mainSite/components/Page/Nutrition2'
import Nutrition3 from './design/mainSite/components/Page/Nutrition3'


const { Header, Content, Footer } = Layout
const { Link } = Anchor

const App = () => {
  const [visible, setVisible] = React.useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  

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
   <Menu  mode="horizontal" className='largeDisplay' >
        <Menu.Item key="home" icon={<HomeOutlined style={{color:'#009688'}} />}>
          KCM INC
        </Menu.Item>
        <Menu.Item key="solutions"  icon={<BulbOutlined style={{color:'#009688'}} />}>
         Solutions
        </Menu.Item>
        <Menu.Item key="faq"  icon={<QuestionOutlined style={{color:'#009688'}} />}>
        FAQ
        </Menu.Item>
        <Menu.Item key="contact"  icon={<MessageOutlined style={{color:'#009688'}} />}>
         Contact us
        </Menu.Item>
      </Menu>
      <Menu  mode="horizontal" className='smallDisplay' >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          KCM INC
        </Menu.Item>
        <Menu.Item key="solutions">
        <Button type="dashed" onClick={showDrawer} icon={<FolderViewOutlined style={{fontSize:'1.25rem',color:'#009688'}}  />} >
        
      </Button>
        </Menu.Item>
       
      </Menu>
      </Header>
      <Content className='site-layout'>
      <Drawer title="Basic Drawer" placement="left" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
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

      {/* <Footer style={{ backgroundColor: '#009688',width:'auto' }}>
        <Row>
<Col xs={24} md={8}>
  d
</Col>
<Col xs={24} md={8}>
  d
</Col>
<Col xs={24} md={8}>
  d
</Col>

        </Row>
        KCM INC EST.2016 <a href="tel:+4047400093">404-740-0093</a>
      


        <FacebookFilled />
        <TwitterSquareFilled />
      </Footer> */}
    </Layout>
  )
}

export default App
