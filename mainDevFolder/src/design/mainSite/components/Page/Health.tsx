import { CheckCircleOutlined, ExperimentFilled } from '@ant-design/icons';
import { Row, Col, Button, Form, Input, Checkbox, Card } from 'antd';
import { motion } from 'framer-motion';
import * as React from 'react';
import { RiHealthBookFill } from 'react-icons/Ri';
import { Link, useHistory } from 'react-router-dom'





const Health = () => {

    let history = useHistory()

    const pushHome = () => {
        history.goBack()

    }

    const nextStep = (e) => {
        history.push('/health/nutritionalanalysis')
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <Row style={{ height: '90vh', display: 'flex', alignItems: 'center',backgroundColor: '#fafafa' }}>

            <Col xs={24} className='nutrimapCardCol'>
                {/* <h3><ExperimentFilled style={{ fontSize: '2rem', color: '#009688' }} />Nutrimap</h3>
                <p style={{ width: '20rem' }}><span style={{ color: '#009688' }}>Nutrimap</span> provides institutions with a complete
                    nutrient breakdown of individual food items based weight and ingredients. </p>
                <p style={{ width: '20rem' }}>What's provided:</p>


                <p style={{ width: '20rem' }}><CheckCircleOutlined style={{ color: '#009688', marginRight: '5px' }} />Nutrient Breakdown</p>
                <p style={{ width: '20rem' }}><CheckCircleOutlined style={{ color: '#009688', marginRight: '5px' }} />Daily Value Breakdown</p>
                <p style={{ width: '20rem' }}><CheckCircleOutlined style={{ color: '#009688', marginRight: '5px' }} />Dietary Reference Intake Breakdown</p>
                <p style={{ width: '20rem' }}><CheckCircleOutlined style={{ color: '#009688', marginRight: '5px' }} />Product Health Score</p>





                <Button onClick={nextStep} type="primary" shape="round" size={'large'}>
                    Next
                </Button> */}

                <Card className='card'>
                    <motion.div>
                        1
                    </motion.div>
                    <h4>Nutrimap Registration</h4>
                    <h3>Tell us about your institution. </h3>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>


            </Col>
        </Row>

    );
};

export default Health;