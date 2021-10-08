import * as React from 'react';
import { Layout,Breadcrumb,Menu} from 'antd';

const {Header,Content,Footer} = Layout





    const Home:React.FC = ()=>{
    const [old,newOld] = React.useState([])

       React.useEffect(() =>{
            (async () =>{
                let newData = await fetch('http://localhost:4000/client_suite')
                let reply = await newData.json();
                newOld(reply)
            })()
       },[])
       old.map((i)=>{
           console.log(i.first_name)
       })
        
        return (
           <React.Fragment>
                <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        Content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
               {old.map((i,j)=>( 
                   <p key={j}>{i.first_name}</p>
               ))}
               <p>Hello to all</p>
           </React.Fragment>
        )
    };

 export default Home;




