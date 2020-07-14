import React, {useState, useEffect} from 'react';
import "antd/dist/antd.css";
import axios from 'axios';

// Components
import { Navigation } from './Components/Navigation';
import { Tasks } from './Components/Tasks';
import { Queue } from './Components/Queue';
import { Layout } from 'antd';
import moment from 'moment';
const { Header, Content } = Layout;

function App() {

  const currentDate = moment(new Date());
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

  return (
    <div className="App h-screen">
      <Layout className="h-full">
       <Queue 
        tasks={tasks}
        statusCodes={statusCodes}
        setTime={setTime}
        currentDate={currentDate}
       />
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