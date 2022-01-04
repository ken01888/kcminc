import { CheckCircleOutlined, ExperimentFilled } from '@ant-design/icons'
import { Row, Col, Button, Form, Input, Checkbox, Card, Select, Cascader } from 'antd'
import { motion } from 'framer-motion'
import * as React from 'react'
import { RiHealthBookFill } from 'react-icons/Ri'
import { Link, useHistory } from 'react-router-dom'

const Health = () => {
  let history = useHistory()

  const pushHome = () => {
    history.goBack()
  }

  const nextStep = e => {
    history.push('/health/nutritionalanalysis')
  }

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  
  function onChange(value) {
    console.log(value);
  }

  return (
    <Row
      style={{
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fafafa'
      }}
    >
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
          <motion.div>1</motion.div>
          <h4 className='text_1'>Nutrimap Registration</h4>
          <h3 className='text_2'>Tell us about your institution. </h3>
          <Form
            name='basic'
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
            size='large'
          >
            <Form.Item
              name='institution_name'
              rules={[
                { required: true, message: 'Please input your username!' }
              ]}
            >
              <Input placeholder='Name' className='input' />
            </Form.Item>

            <Form.Item
              name='institution_email'
              rules={[
                { required: true, message: 'Please input your password!' }
              ]}
            >
              <Input placeholder='Email Address' className='input' />
            </Form.Item>

            <Form.Item
              name='institution_phone'
              rules={[
                { required: true, message: 'Please input your password!' }
              ]}
            >
              <Input placeholder='Phone Number' className='input' />
            </Form.Item>
            <Form.Item  
             name='institution_market'
             rules={[
               { required: true, message: 'Please input your password!' }
             ]}
            >
            <Cascader className='input' options={options} onChange={onChange} placeholder="Industry" />

            </Form.Item>

            <Form.Item >
              <motion.button
                className='button'
                whileHover={{
                  border: '2px dashed darkgoldenrod',
                  backgroundColor: 'darkgoldenrod'
                }}
                type='submit'
              >
                <Link to='/health'>Next</Link>
              </motion.button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Health
