import { CheckCircleOutlined } from '@ant-design/icons';
import { Row, Col, Button } from 'antd';
import * as React from 'react';
import { RiHealthBookFill } from 'react-icons/Ri';
import {Link,useHistory} from 'react-router-dom'





const Health = () => {

    let history=useHistory()

    const pushHome = () =>{
        history.goBack()
        
    }
    
    const nextStep = (e) =>{
       history.push('/health/nutritionalanalysis')
    }



    return (
        <Row style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa' }}>

            <Col xs={23} md={5} >
                <RiHealthBookFill style={{ fontSize: '5rem', color: '#009688' }} />

                <h3>Nutrimap</h3>
                <p style={{width:'20rem'}}><span style={{color:'#009688'}}>Nutrimap</span> provides institutions with a complete 
                nutrient breakdown of individual food items based weight and ingredients. </p>
                <p style={{width:'20rem'}}>What's provided:</p>


                <p style={{width:'20rem'}}><CheckCircleOutlined style={{color:'#009688', marginRight:'5px'}}/>Micro and Macro nutrient component breakdown</p>
                <p style={{width:'20rem'}}><CheckCircleOutlined style={{color:'#009688', marginRight:'5px'}}/>Dietary Reference Intakes breakdown</p>
                <p style={{width:'20rem'}}><CheckCircleOutlined style={{color:'#009688', marginRight:'5px'}}/>Product Health Report</p>



                
                    <Button onClick={pushHome} type="primary" shape="round" size={'large'}>Back</Button>
                
                <Button onClick={nextStep} type="primary" shape="round" size={'large'}>
                    Next
                </Button>
            </Col>
        </Row>

    );
};

export default Health;