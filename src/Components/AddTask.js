import React, {useState} from 'react'

// Components
import { Modal, Form, Input, DatePicker, Select, Layout, Row, Col } from 'antd';

export const AddTask = ({visibility, setVisibility, addTask}) => {
   const [componentSize] = useState('medium');
   const [formLayout] = useState('vertical');
   
   return (
      <>
         <Modal
            title="New Task"
            visible={visibility}
            onCancel={() => setVisibility(!visibility)}
            onOk={addTask}
            okText={'Submit'}
         >
            <Form
               layout={formLayout}
               name="basic"
               size={componentSize}
               initialValues={{ remember: true }}
               // onFinish={onFinish}
               // onFinishFailed={onFinishFailed}
            >
               <Layout>
                  <Row>
                     <Col span={24}>
                        <Form.Item
                           label="Title"
                           name="title"
                           rules={[{ required: true, message: 'Required' }]}
                        >
                           <Input />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={8} className="px-1">
                        <Form.Item 
                           label="Date" 
                           name="date" 
                           rules={[{ required: true, message: 'Required' }]}>
                           <DatePicker />
                        </Form.Item>
                     </Col>
                     <Col span={8} className="px-1">
                        <Form.Item 
                           label="Category"
                           name="category"
                           rules={[{ required: true, message: 'Required' }]}
                        >
                           <Select>
                              <Select.Option value="projects">Projects</Select.Option>
                              <Select.Option value="work">Work</Select.Option>
                              <Select.Option value="study">Study</Select.Option>
                           </Select>
                        </Form.Item>
                     </Col>
                     <Col span={8} className="px-1">
                        <Form.Item 
                           label="Priority"
                           name="priority"
                           rules={[{ required: true, message: 'Required' }]}
                           placeholder="Priority"
                        >
                           <Select>
                              <Select.Option value="1">1</Select.Option>
                              <Select.Option value="2">2</Select.Option>
                              <Select.Option value="3">3</Select.Option>
                              <Select.Option value="4">4</Select.Option>
                              <Select.Option value="5">5</Select.Option>
                           </Select>
                        </Form.Item>
                     </Col>
                  </Row>
               </Layout>
            </Form> 
         </Modal>
      </>
   )
}