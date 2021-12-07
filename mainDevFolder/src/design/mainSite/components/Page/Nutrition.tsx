import { ExperimentFilled, LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
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
    //     (async () => {
    //         let newData = await fetch('http://localhost:4000/nutrientmap/client', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json'
    //           },
    //           body: JSON.stringify(values)
    //         })
    
       history.push(`/health/nutritionalanalysis/2/${values}`)
    //       })()


    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const nextStep = (values:any) =>{
      
        //   setnutrition(data)

       
        // e.preventDefault
        // let newData = await fetch('http://localhost:4000/nutrientmap')
            console.log(values)
     }

    
    


    return (
        

<Row style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa' }}>

<Col xs={24} style={{ display: 'grid', justifyContent: 'center' }}>
                <br></br>
                <h3 style={{display:'flex',justifyContent:'end',alignItems:'center',width:'auto'}}> <ExperimentFilled  style={{ fontSize: '2rem', color: '#009688' }} />Nutrimap</h3>
                <p style={{display:'flex',justifyContent:'end'}}>Tell us about yourself.</p>
                <Form
                    name="basic"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 14 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                >
                    <Form.Item
                        label="First name"
                        name="first_name"
                        rules={[{ required: true, message: 'Please your first name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Last name"
                        name="last_name"
                        rules={[{ required: true, message: 'Please enter your last name!' }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Phone number"
                        name="phone_number"
                        rules={[{ required: true, message: 'Please enter a valid phone number!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please enter a valid email address!' }]}
                    >
                        <Input />
                    </Form.Item>
                   

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button onClick={()=>{history.goBack()}} type="primary" shape="round" size={'large'}>
                            Next
                        </Button>
                        <Button onClick={nextStep}  type="primary" shape="round" size={'large'} htmlType='submit'>
                            Next
                        </Button>
                    </Form.Item>
              
                </Form>
            </Col>
           
</Row>

    )
};

export default Nutrition;