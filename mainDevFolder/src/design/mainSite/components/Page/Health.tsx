import { CheckCircleOutlined, ExperimentFilled } from '@ant-design/icons'
import { Row, Col, Button, Form, Input, Checkbox, Card, Select, Cascader, Popover, Modal, Badge, Statistic, Divider } from 'antd'
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

    

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }


    function onChange(value) {
        console.log(value);
    }

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {

        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values: any) => {
        (async () => {
            let newData = await fetch('http://localhost:4000/nutrientmap/client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            let newInsert = await newData.json()
            // history.push(`/health/nutritionalanalysis/2/${newInsert}`)
            console.log(values)
        })()


    };

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


                <Card className='card'>
                    <h1 >Nutrimap Registration</h1>
                    <h3 className='text_2'>Tell us about your institution. </h3>
                    <Form
                        name='basic'
                        wrapperCol={{ span: 24 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete='on'
                        size='large'
                    >
                        <Form.Item
                            name='institution_name'
                            rules={[
                                { required: true, message: "Please input your instition's name." }
                            ]}
                        >
                            <Input placeholder='Name' className='input' />
                        </Form.Item>

                        <Form.Item
                            name='institution_email'
                            rules={[
                                { required: true, message: "Please input a valid email address." }
                            ]}
                        >
                            <Input placeholder='Email Address' className='input' />
                        </Form.Item>

                        <Form.Item
                            name='institution_phone'
                            rules={[
                                { required: true, message: "Please input a valid contact number." }
                            ]}
                        >
                            <Input placeholder='Phone Number' className='input' />
                        </Form.Item>
                        <Form.Item
                            name='website'
                            rules={[
                                { required: false }
                            ]}
                        >
                            <Input placeholder='Web address' className='input' />
                        </Form.Item>
                        <Form.Item
                            name='solution_request'
                            rules={[
                                { required: true, message: 'Please select solutions!' }
                            ]}
                        >
                            <Select mode='multiple' className='input' placeholder="What solution/s are you interested in?">
                                <Select.Option value="NLDV">Nutritional Labeling DV</Select.Option>
                                <Select.Option value="NLDV&DRI">Nutritional Labeling DV plus Dietary Reference Intakes</Select.Option>
                                <Select.Option value="CBRG">Digital recipe guide</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name='menuItems_quantity'
                            rules={[
                                { required: true, message: 'Please select solutions!' }
                            ]}
                        >
                            <Select  className='input' placeholder="How many items are on your menu?">
                                <Select.Option value="1-10">1-10</Select.Option>
                                <Select.Option value="11-20">11-20</Select.Option>
                                <Select.Option value="21-30">21-30</Select.Option>
                                <Select.Option value="31-40">31-40</Select.Option>
                                <Select.Option value="41-50">41-50</Select.Option>
                                <Select.Option value="50+">50+</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name='frequencyOfChange'
                            rules={[
                                { required: true, message: 'Please select solutions!' }
                            ]}
                        >
                            <Select  className='input' placeholder="How often does your menu change?">
                                <Select.Option value="Daily">Daily</Select.Option>
                                <Select.Option value="Weekly">Weekly</Select.Option>
                                <Select.Option value="Monthly">Monthly</Select.Option>
                                <Select.Option value="Quarterly">Quarterly</Select.Option>
                                <Select.Option value="Annually">Annually</Select.Option>
                                <Select.Option value="Fixed">Fixed</Select.Option>

                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('Please agree to terms of service.')),
                                },
                            ]}
                        >
                            <Checkbox>
                                I have read and understand the
                                <motion.button whileHover={{ color: 'darkgoldenrod' }} type='button' className='terms' onClick={showModal}>terms of service</motion.button>

                            </Checkbox>
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
                               Submit
                            </motion.button>
                        </Form.Item>

                    </Form>
                </Card>
            </Col>
            <Modal title="Nutrimap" visible={isModalVisible}

                footer={[<motion.button className='button' whileHover={{ border: '2px dashed darkgoldenrod', backgroundColor: 'darkgoldenrod' }} type='button' onClick={handleCancel}>Exit</motion.button>,
                <motion.button className='button' whileHover={{ border: '2px dashed darkgoldenrod', backgroundColor: 'darkgoldenrod' }} type='button' ><Link to='/health'>Continue</Link></motion.button>]}>
                {/* <p>
            Nutrimap is a data driven nutritional analysis solution
            developed to improve consumer health and wellbeing.
            Nutrimap doesn't just provide a complete nutrient breakdown
            of food products, it also provides nutritional data based on
            an individual's stage in life.
          </p> */}
                <Badge color='darkgoldenrod' text='Overview' />
                <p className='modal'>
                    Nutrimap is designed to improve individual health and well-being
                    by providing institutions and enterprises with a comprehensive
                    nutrient analysis for the development of healthier food products.
                </p>
                <Statistic title={<h5>Americans consuming to much sodium.</h5>} value={9} suffix="/10" />
                <Statistic title={<h5>Americans ages 2-19 diagnosed with obesity.</h5>} value={19} suffix="%" />
                <Statistic title={<h5>Americans adults diagnosed with obesity.</h5>} value={40} suffix="%" />
                <Divider dashed style={{ borderWidth: '2px', borderColor: 'darkgoldenrod' }}></Divider>
                <p className='modal1'>
                    Click continue below to submit your organizations information.
                </p>






            </Modal>
        </Row>
    )
}

// console.log(props)

//     const history = useHistory()

//     const pushHome = () => {
//         history.goBack()

//     }

//     const onFinish = (values:any) => {
//         (async () => {
//             let newData = await fetch(`http://localhost:4000/nutrientmap/institution/${props.match.params.client}`, {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(values)
//             })
//        history.push('/health/nutritionalanalysis/3')
//     console.log(values)
// })()
//     };

//     const onFinishFailed = (errorInfo: any) => {
//         console.log('Failed:', errorInfo);
//     };

//     const nextStep = (e) => {
//         history.push('/health/nutritionalanalysis/3')
//     }

//     function handleChange(value) {
//         console.log(`selected ${value}`);
//     }

export default Health
