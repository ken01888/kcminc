import * as React from 'react'
import {
  Layout,
  Breadcrumb,
  Menu,
  Row,
  Col,
  Space,
  List,
  Avatar,
  Timeline,
  Collapse,
  Affix,
  Button,
  Card,
  Tag,
  Descriptions,
  Badge
} from 'antd'
import {
  LeftSquareOutlined,
  PauseOutlined,
  PlusOutlined,
  TwitterCircleFilled,
  TwitterOutlined,
  TwitterSquareFilled,
  LinkedinFilled,
  LinkedinOutlined,
  CaretRightOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { duration } from 'moment'
import { FcOrgUnit, FcGenealogy } from 'react-icons/fc'
const { Panel } = Collapse
const Home: React.FC = () => {
  const [old, newOld] = React.useState([])

  React.useEffect(() => {
    (async () => {
      let newData = await fetch('http://localhost:4000')
      let reply:{foods:any[]} = await newData.json()
      let newReply = await reply.foods[1].foodNutrients.map(i=> i.nutrientId)
      console.log(newReply)
      
   
    })()
  }, [])
  const data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ]
  return (
    <React.Fragment>
      <Row justify='center' className='heroSection' gutter={[24, 64]}>
        <Col xs={12}>
          <h1 className='h1_heroSection'>
            {' '}
            Solutions for Food Support Institutions.
          </h1>
        </Col>

        <Col offset={1} xs={18}>
          <h2>How we help </h2>
          <p>
            At <span>KCM</span> <sup>INC</sup> we strive to provide our clients
            with innovative solutions that benefit both people and the
            planet.Our solutions protect the longevity of your organization, its
            competitive position and improves stakeholder value.
          </p>
        </Col>
      </Row>

      {/* {Solutions Section} */}
      <Row justify='center'>
        <Col offset={1} xs={18} className='heroSection'>
          <h2 className='h2Solutions'>Our Solutions</h2>
          <p>
            Changes in consumer demands and environmental needs command that
            institutions remain adaptive. Our solutions help optimize your
            organization's performance and simplify the development of nutrient
            rich products.
          </p>

          <Collapse
            activeKey={1}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined
                rotate={isActive ? 90 : 0}
                style={{ color: '#009688' }}

              />
            )}
          >
            <Panel header='Present Solutions' key='1'>
              <Collapse>
                <Panel
                  header={<Tag color='#009688'>Nutritional Analysis</Tag>}
                  key='2'
                >
                  <p>
                    Our nutritional analysis solution gives food manufactures a
                    complete nutritional breakdown of their products based on
                    ingredient weight and serving size. This solution provides a
                    nutritional graph very similar to those found on the back of
                    household nondurable goods.
                  </p>

                  <Descriptions title="Product Info" layout="horizontal" >
                    <Descriptions.Item label="Product">Chick-fil-a Chicken Sandwich</Descriptions.Item>
                    <Descriptions.Item label="Serving Size">183g</Descriptions.Item>
                    <Descriptions.Item label="Test">Nutritional Content</Descriptions.Item>
                    <Descriptions.Item label="Calories">440</Descriptions.Item>
                    <Descriptions.Item label="FAT (G)">
                      17
                    </Descriptions.Item>
                    <Descriptions.Item label="SAT. FAT (G)">
                      4
                    </Descriptions.Item>
                    <Descriptions.Item label="TRANS FAT (G)">0</Descriptions.Item>
                    <Descriptions.Item label="CHOLESTEROL (MG)">70</Descriptions.Item>
                    <Descriptions.Item label="SODIUM (MG)">1400</Descriptions.Item>
                    <Descriptions.Item label="CARBOHYDRATES(G)">41</Descriptions.Item>
                    <Descriptions.Item label="FIBER">1</Descriptions.Item>
                    <Descriptions.Item label="SUGAR (G)">6</Descriptions.Item>
                    <Descriptions.Item label="PROTEIN">29</Descriptions.Item>



                    <Descriptions.Item label="Source" span={2}>
                      <a href="https://www.chick-fil-a.com/nutrition-allergens" target='_blank'>Chick-fil-a</a>
                    </Descriptions.Item>

                    <Descriptions.Item label="Information">
                      <a href="https://www.chick-fil-a.com/nutrition-allergens" target='_blank'>Chick-fil-a</a>
                    </Descriptions.Item>
                  </Descriptions>
                  

                  <Collapse ghost>
                    <Panel header={'Deep Analysis'} key='2'>
                      
                      <Descriptions title={`Chick-fil-a Chicken Sandwich`} layout="horizontal" >
                    <Descriptions.Item label="Product">{`Chick-fil-a Chicken Sandwich`}</Descriptions.Item>
                    <Descriptions.Item label="Serving Size">183g</Descriptions.Item>
                    <Descriptions.Item label="Test">Nutritional Content</Descriptions.Item>
                    <Descriptions.Item label="Calories">440</Descriptions.Item>
                    <Descriptions.Item label="FAT (G)">
                      17
                    </Descriptions.Item>
                    <Descriptions.Item label="SAT. FAT (G)">
                      4
                    </Descriptions.Item>
                    <Descriptions.Item label="TRANS FAT (G)">0</Descriptions.Item>
                    <Descriptions.Item label="CHOLESTEROL (MG)">70</Descriptions.Item>
                    <Descriptions.Item label="SODIUM (MG)">1400</Descriptions.Item>
                    <Descriptions.Item label="CARBOHYDRATES(G)">41</Descriptions.Item>
                    <Descriptions.Item label="FIBER">1</Descriptions.Item>
                    <Descriptions.Item label="SUGAR (G)">6</Descriptions.Item>
                    <Descriptions.Item label="PROTEIN">29</Descriptions.Item>



                    <Descriptions.Item label="Source" span={2}>
                      <a href="https://www.chick-fil-a.com/nutrition-allergens" target='_blank'>Chick-fil-a</a>
                    </Descriptions.Item>

                    <Descriptions.Item label="Information">
                      <a href="https://www.chick-fil-a.com/nutrition-allergens" target='_blank'>Chick-fil-a</a>
                    </Descriptions.Item>
                  </Descriptions>
                    </Panel>
                  </Collapse>
                </Panel>
              </Collapse>
            </Panel>
          </Collapse>
        </Col>
      </Row>

      {/* <Row justify='center'>
        <Col md={18} className='contactSection'>
          <h1>Contact</h1>
        </Col>
      </Row> */}
    </React.Fragment>
  )
}

export default Home
