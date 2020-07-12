import React, {useState, useEffect} from 'react';
import "antd/dist/antd.css";
import axios from 'axios';

// Components
import { Navigation } from './Components/Navigation';
import { Tasks } from './Components/Tasks';
import { Layout, Menu, Progress, Divider, DatePicker } from 'antd';
import moment from 'moment';
const { Sider, Header, Content } = Layout;
const { SubMenu } = Menu;

function App() {

  const currentDate = moment(new Date());
  const [collapsed] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    axios.get('/api/tasks')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }, [])

  const tasks = [
    {
       id: 0,
       title: 'Midnight Assassin Revisions',
       description: 'Description', 
       dateCreated: '', 
       category: 'Work', 
       status: 'In Progress',
       deadline: ''
    }, 
    {
       id: 1,
       title: 'Title 2',
       description: 'Description', 
       dateCreated: '', 
       category: 'Projects', 
       status: 'new',
       deadline: ''
    }, 
    {
       id: 2,
       title: 'Title 3',
       description: 'Description', 
       dateCreated: '', 
       category: 'Study', 
       status: 'complete',
       deadline: ''
    }, 
 ];

 const statusCodes = {
   new: '#3a86ff',
   inProgress: '#ffe66d',
   complete: '#02c39a',
   upcoming: '#5e60ce', 
   overdue: '#ff6b6b'
 }

 const onChange = date => {
  setTime(date.format('MM/DD/YYYY'));
}

  return (
    <div className="App h-screen">
      <Layout className="h-full">
        <Sider
          className="border-r"
          breakpoint="md"
          collapsedWidth="0"
          width={'300px'}
          collapsible={true}
          reverseArrow={true}
          theme={'light'}>
          <section style={{width: '100%', padding: '0 24px'}}>
            <DatePicker 
              defaultValue={currentDate}
              onChange={onChange} 
              showToday={false}
              format={'MM/DD/YYYY'}
              allowClear={false}
            />
          </section>
          <Divider />
          <Progress
            style={{padding: '0 24px', width: '100%', marginBottom: '20px'}}
            strokeColor={{
              '0%': '#72efdd',
              '100%': '#E48bfe3',
            }}
            percent={60}
          />
          <Menu
            defaultOpenKeys={['s1']}
            mode="inline"
            inlineCollapsed={collapsed}
          >
            <Menu.Item key="1" className="flex space-between">
              <span>Today</span>
              <span className="text-white px-3 rounded-sm flex items-center" style={{backgroundColor: `${statusCodes['new']}` }}>{tasks.length}</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>In Progress</span>
              <span className="text-white px-3 rounded-sm flex items-center" style={{backgroundColor: `${statusCodes['inProgress']}` }}>{tasks.length}</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span>Complete</span>
              <span className="text-white px-3 rounded-sm flex items-center" style={{backgroundColor: `${statusCodes['complete']}` }}>{tasks.length}</span>
            </Menu.Item> 
            <Menu.Item key="4">
              <span>Upcoming</span>
              <span className="text-white px-3 rounded-sm flex items-center" style={{backgroundColor: `${statusCodes['upcoming']}` }}>{tasks.length}</span>
            </Menu.Item> 
            <Menu.Item key="5">
              <span>Overdue</span>
              <span className="text-white px-3 rounded-sm flex items-center" style={{backgroundColor: `${statusCodes['overdue']}` }}>{tasks.length}</span>
            </Menu.Item> 
            <Divider />
            <SubMenu key="s1" title="Categories">
              <Menu.Item key="6">Projects</Menu.Item>
              <Menu.Item key="7">Work</Menu.Item>
              <Menu.Item key="8">Study</Menu.Item>
            </SubMenu>
          </Menu> 
        </Sider>
        <Layout>
          <Header
            className="border-b">
            <Navigation />
          </Header>
          <Content className="bg-gray-200">
            <Tasks
              time={time}
              setTime={setTime}
              tasks={tasks}
              statusCodes={statusCodes}
              currentDate={currentDate}
            />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;