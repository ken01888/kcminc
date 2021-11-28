import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, Steps } from 'antd';
import * as React from 'react';
import { RiHealthBookFill } from 'react-icons/Ri';

import { Link, useHistory } from 'react-router-dom';




const Nutrition = () => {

    const history = useHistory()

    const pushHome = () => {
        history.goBack()

    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const nextStep = () =>{
        history.push('/health/nutritionalanalysis/2')
     }

    
    


    return (
        

<Row style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa' }}>

<Col xs={24} style={{ display: 'grid', justifyContent: 'center' }}>
                <RiHealthBookFill style={{ fontSize: '5rem', color: '#009688' }} />
                <br></br>
                <h3>Nutritional Analysis<span>1</span></h3>
                <p className='pHero'>Tell us about yourself.</p>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                >
                    <Form.Item
                        label="First name"
                        name="firstname"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Last name"
                        name="lastname"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Phone number"
                        name="phonenumber"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button onClick={()=>{history.goBack()}} type="primary" shape="round" size={'large'}>
                            Next
                        </Button>
                        <Button onClick={nextStep} type="primary" shape="round" size={'large'}>
                            Next
                        </Button>
                    </Form.Item>
              
                </Form>
            </Col>
           
</Row>

    )
};

export default Nutrition;