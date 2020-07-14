import React, {useState, useEffect} from 'react';

import { Layout, Menu, Progress, Divider, DatePicker } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

export const Queue = ({tasks, statusCodes, setTime, currentDate}) => {

   const [collapsed] = useState(null);
   
   return (
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
               onChange={date =>  setTime(date.format('MM/DD/YYYY'))} 
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
   )
}