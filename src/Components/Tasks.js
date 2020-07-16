import React, {useState} from 'react';

// Components
import { TaskHeader } from './TaskHeader';
import { Task } from './Task';
import { AddTask } from './AddTask';
import { List, Divider } from 'antd';

export const Tasks = ({time, setTasks, setTime, tasks, statusCodes, currentDate}) => {

   const [visibility, setVisibility] = useState(false);

   return (
      <>
         <AddTask 
            visibility={visibility}
            setVisibility={setVisibility}
            setTasks={setTasks}

         />
         <TaskHeader 
            time={time}
            currentDate={currentDate}
            setTime={setTime}
            className="mb-3"
            visibility={visibility}
            setVisibility={setVisibility}
         />
         <Divider />
         {tasks && <List
            grid={{ gutter: 8, column: 3 }}
            dataSource={tasks}
            renderItem={item => (
               <List.Item>
                  <Task
                     item={item}
                     statusCodes={statusCodes}
                  />
               </List.Item>
            )}
         /> }
      </>
   )
};
