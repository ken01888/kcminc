import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, Select, Steps } from 'antd';
import * as React from 'react';
import { RiHealthBookFill } from 'react-icons/Ri';

import { Link, useHistory } from 'react-router-dom';




const Nutrition_2 = () => {

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

    const nextStep = (e) => {
        history.push('/health/nutritionalanalysis/3')
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }





    return (


        <Row style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa' }}>

            <Col xs={24} style={{ display: 'grid', justifyContent: 'center' }}>
                <RiHealthBookFill style={{ fontSize: '5rem', color: '#009688' }} />
                <br></br>
                <h3>Nutrimap</h3>
                <p className='pHero'>Tell us about your institution.</p>
                <Form
                    name="basic"
                    labelCol={{ span: 9 }}
                    wrapperCol={{ span: 15 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                >
                    <Form.Item
                        label="Institution:"
                        name="institution_name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Industry:"
                        name="industry"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Select style={{ width: 185 }} onChange={handleChange}>
                            <Select.OptGroup label="Consumer Services">
                                <Select.Option value="Casinos">Casinos</Select.Option>
                                <Select.Option value="Cruise Line">Cruise Line</Select.Option>
                                <Select.Option value="Hotel">Hotel</Select.Option>
                                <Select.Option value="Leisure">Leisure</Select.Option>
                                <Select.Option value="Restaurant">Restaurant</Select.Option>
                            </Select.OptGroup>

                            <Select.OptGroup label="Consumer Staples">
                                <Select.Option value="Food Distribution">Food Distribution</Select.Option>
                                <Select.Option value="Food Retail">Food Retail</Select.Option>
                                <Select.Option value="Packaged Food & Meats">Packaged Food & Meats</Select.Option>
                                <Select.Option value="Supermarkets">Supermarkets</Select.Option>
                                <Select.Option value="Soft Drinks">Soft Drinks</Select.Option>
                            </Select.OptGroup>

                            <Select.OptGroup label="Health Care">
                                <Select.Option value="Health Care Facilities">Health Care Facilities</Select.Option>
                            </Select.OptGroup>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Street address"
                        name="street_address"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="State"
                        name="state"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Zipcode"
                        name="zipcode"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>



                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button onClick={() => { history.goBack() }} type="primary" shape="round" size={'large'}>
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

export default Nutrition_2;