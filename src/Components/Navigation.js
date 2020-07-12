import React from 'react';

// Components 
import { Layout, Row, Col } from 'antd';
import { AiTwotoneCalendar, AiOutlineSearch, AiOutlineUnorderedList } from 'react-icons/ai';
import { RiTrelloLine } from 'react-icons/ri';

export const Navigation = () => (
<Layout>
   <Row>
      <Col span={18}>
         <h1 className=" text-xl antialiased font-bold tracking-tight text-gray-700">Task Manager</h1>
      </Col>
      <Col span={6}>
         <Row>
            <Col span={6} style={{display: 'flex', justifyContent: 'flex-end', padding: '0.5rem 0', alignItems: 'center'}}>
               <section className="p-3 cursor-pointer">
                  <AiOutlineUnorderedList className="text-xl antialiased text-gray-600" />
               </section>
            </Col>
            <Col span={6} style={{display: 'flex', justifyContent: 'flex-end', padding: '0.5rem 0', alignItems: 'center'}}>
               <section className="p-3 cursor-pointer">
                  <AiOutlineSearch className="text-xl antialiased text-gray-600" />
               </section>
            </Col>
            <Col span={6} style={{display: 'flex', justifyContent: 'flex-end', padding: '0.5rem 0', alignItems: 'center'}}>
               <section className="p-3 cursor-pointer">
                  <AiTwotoneCalendar className="text-xl antialiased text-gray-600" />
               </section>
            </Col>
            <Col span={6} style={{display: 'flex', justifyContent: 'flex-end', padding: '0.5rem 0', alignItems: 'center'}}>
               <section className="p-3 cursor-pointer">
                  <RiTrelloLine className="text-xl antialiased text-gray-600"  />
               </section>
            </Col>
         </Row>
      </Col>
   </Row>
 </Layout>
);
