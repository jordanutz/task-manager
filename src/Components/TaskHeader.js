import React from 'react';

// Components
import { Row, Col, Layout, Button } from 'antd';

export const TaskHeader = ({time, currentDate, visibility, setVisibility}) => {

   const generateHeader = (time, currentDate) => {     
      if (!time || time === currentDate.format('MM/DD/YYYY')) {
         return 'Today';
      } else {
         return time
      }
   }

   return (
      <Layout>
         <Row>
            <Col span={20}>
               <h2 className="m-0 text-lg antialiased font-bold tracking-tight text-gray-700">{generateHeader(time, currentDate)}</h2>
            </Col>
            <Col span={4} style={{display: 'flex', justifyContent: 'flex-end'}}>
               <Button type="primary" onClick={() => setVisibility(!visibility)}>New Task</Button>
            </Col>
         </Row>
      </Layout>
   )
}
