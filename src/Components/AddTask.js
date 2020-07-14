import React, {useState} from 'react'

// Components
import { Modal, Form, Input, DatePicker, Select, Layout, Row, Col, Button } from 'antd';

export const AddTask = ({visibility, setVisibility, addTask}) => {

   const [componentSize] = useState('medium');
   const [formLayout] = useState('vertical');
   const [newTask, setNewTask] = useState({
      title: null, 
      date: null, 
      category: null, 
      priority: null
   })

   const { title, date, category, priority } = newTask;

   const submitTask = (title, date, category, priority) => {
      console.log(title, date, category, priority)
   }

   return (
      <>
         <Modal
            title="New Task"
            visible={visibility}
            footer={null}
            onCancel={() => setVisibility(!visibility)}
            onOk={() => submitTask(title, date, category, priority)}
            okText={'Submit'}
         >
            <Form
               layout={formLayout}
               onFinish={() => submitTask(title, date, category, priority)}
               name="basic"
               size={componentSize}
               initialValues={{ remember: true }}
            >
               <Layout>
                  <Row>
                     <Col span={24}>
                        <Form.Item
                           label="Title"
                           name="title"
                           rules={[{ required: true, message: 'Required' }]}
                        >
                           <Input value={title} onChange={(e) => setNewTask({...newTask, title: e.target.value})} />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={8} className="px-1">
                        <Form.Item 
                           label="Date" 
                           name="date" 
                           rules={[{ required: true, message: 'Required' }]}>
                           <DatePicker
                              format={'MM/DD/YYYY'}
                              showToday={false}
                              allowClear={false}     
                              onChange={date => setNewTask({...newTask, date: date}) } />
                        </Form.Item>
                     </Col>
                     <Col span={8} className="px-1">
                        <Form.Item 
                           label="Category"
                           name="category"
                           rules={[{ required: true, message: 'Required' }]}
                        >
                           <Select 
                              value={category}
                              onChange={value => setNewTask({...newTask, category: value})}>
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
                           <Select 
                              value={priority}
                              onChange={value => setNewTask({...newTask, priority: value})}>
                              <Select.Option value="1">1</Select.Option>
                              <Select.Option value="2">2</Select.Option>
                              <Select.Option value="3">3</Select.Option>
                              <Select.Option value="4">4</Select.Option>
                              <Select.Option value="5">5</Select.Option>
                           </Select>
                        </Form.Item>
                     </Col>
                     <Col span={24}>
                        <Form.Item style={{margin: '0'}}>
                           <Button>
                              Clear
                           </Button>
                           <Button type="primary" htmlType="submit" className="ml-3">
                              Submit
                           </Button>
                        </Form.Item>
                     </Col>
                  </Row>
               </Layout>
            </Form> 
         </Modal>
      </>
   )
}