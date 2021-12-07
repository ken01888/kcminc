import { ExperimentFilled, LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, Select, Steps } from 'antd';
import * as React from 'react';
import { RiHealthBookFill } from 'react-icons/Ri';

import { Link, useHistory } from 'react-router-dom';




const Nutrition_2 = (props) => {
    console.log(props)

    const history = useHistory()

    const pushHome = () => {
        history.goBack()

    }

    const onFinish = (values:any) => {
        (async () => {
            let newData = await fetch(`http://localhost:4000/nutrientmap/institution/${props.match.params.client}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
            })
    //    history.push('/health/nutritionalanalysis/2')
    console.log(values)
})()
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
                <h3 style={{display:'flex',justifyContent:'end',alignItems:'center',width:'auto'}}> <ExperimentFilled  style={{ fontSize: '2rem', color: '#009688' }} />Nutrimap</h3>
                <p style={{display:'flex',justifyContent:'end'}}>Tell us about your institution</p>
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
                        label="Name:"
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
                        <Select style={{ width: '-webkit-fill-available' }} >
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
                        label="Size:"
                        name="institution_size"
                        rules={[{ required: true, message: 'Please enter a valid email address!' }]}
                    >
                        <Select style={{ width: '-webkit-fill-available' }} >
                                <Select.Option value="small">Small</Select.Option>
                                <Select.Option value="medium">Medium</Select.Option>
                                <Select.Option value="large">Large</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Zipcode:"
                        name="zipcode"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>



                  

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                     
                        <Button type="primary" shape="round" size={'large'} htmlType='submit'>
                            Next
                        </Button>
                    </Form.Item>

                </Form>
            </Col>

        </Row>

    )
};

export default Nutrition_2;