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

                <h3>Nutritional Analysis</h3>
                <p style={{width:'20rem'}}>Create healthier products by analyzing the nutritional content of food items.</p>
                
                    <Button onClick={pushHome} type="primary" shape="round" size={'large'}>Back</Button>
                
                <Button onClick={nextStep} type="primary" shape="round" size={'large'}>
                    Next
                </Button>
            </Col>
        </Row>

    );
};

export default Health;