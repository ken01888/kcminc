import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, Steps } from 'antd';
import * as React from 'react';
import { RiHealthBookFill } from 'react-icons/Ri';

import { Link, useHistory } from 'react-router-dom';




const Nutrition3 = () => {

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

    const nextStep = (e) =>{
        history.push('/health/nutritionalanalysis/3')
     }

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
      }



    return (


        <Row style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa' }}>

            <Col xs={24} style={{ display: 'grid', justifyContent: 'center' }}>
                <RiHealthBookFill style={{ fontSize: '5rem', color: '#009688' }} />
                <br></br>
                <h3>Nutritional Analysis step 3</h3>
                <p className='pHero'>What solutions do you need? </p>
                <Form
                    name="basic"
                    labelCol={{ span: 9 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                >
                    <Form.Item
                        
                        name="institution_name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                            <Row>
                                <Col span={24}>
                                    <Checkbox value="Nutritional Analysis">Nutrient Analysis</Checkbox>
                                </Col>
                                <Col span={24}>
                                    <Checkbox value="Digital Nutritional Label">Digital Nutritional Label</Checkbox>
                                </Col>
                                <Col span={24}>
                                    <Checkbox value="Health Breakdown">Product Health Report</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
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

export default Nutrition3;