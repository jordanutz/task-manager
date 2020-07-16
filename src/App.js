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

  let currentDate = moment(new Date());
  const [time, setTime] = useState(null);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {

    const selected = !time ? currentDate.format('MM/DD/YYYY') : time;

    axios.get(`/api/tasks?date=${selected}`)
    .then(res => setTasks(res.data))
    .catch(err => console.log(err))
  }, [currentDate, time])

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
        setTasks={setTasks}
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