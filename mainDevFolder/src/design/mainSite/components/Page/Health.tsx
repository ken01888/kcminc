import { CheckCircleOutlined, ExperimentFilled } from '@ant-design/icons';
import { Row, Col, Button } from 'antd';
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



    return (
        <Row style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa' }}>

            <Col xs={23} md={5} >
                <h3><ExperimentFilled style={{ fontSize: '2rem', color: '#009688' }} />Nutrimap</h3>
                <p style={{ width: '20rem' }}><span style={{ color: '#009688' }}>Nutrimap</span> provides institutions with a complete
                    nutrient breakdown of individual food items based weight and ingredients. </p>
                <p style={{ width: '20rem' }}>What's provided:</p>


                <p style={{ width: '20rem' }}><CheckCircleOutlined style={{ color: '#009688', marginRight: '5px' }} />Nutrient Breakdown</p>
                <p style={{ width: '20rem' }}><CheckCircleOutlined style={{ color: '#009688', marginRight: '5px' }} />Daily Value Breakdown</p>
                <p style={{ width: '20rem' }}><CheckCircleOutlined style={{ color: '#009688', marginRight: '5px' }} />Dietary Reference Intake Breakdown</p>
                <p style={{ width: '20rem' }}><CheckCircleOutlined style={{ color: '#009688', marginRight: '5px' }} />Product Health Score</p>





                <Button onClick={nextStep} type="primary" shape="round" size={'large'}>
                    Next
                </Button>
            </Col>
        </Row>

    );
};

export default Health;