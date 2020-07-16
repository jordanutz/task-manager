import React from 'react';

// Components
import { Card, Checkbox } from 'antd';

export const Task = ({item, statusCodes}) => {

   const truncate = (str) => {
      let firstChar = str.charAt(0).toLowerCase();
      str = str.split('').slice(1, str.length).join('')
      return firstChar + str.replace(/\s/g, '');
   }

   return (

      <Card className="shadow-sm card" title={
         <>
            <section className="flex justify-between mb-3">
               <h3 className="text-xs uppercase text-gray-700 antialiased">{item.category}</h3>
               <h3 className="text-xs uppercase text-gray-700 antialiased relative">
                  <span className="card__status" style={{backgroundColor: `${statusCodes[truncate(item.status)]}`}}></span>
                  {item.status}
               </h3>
            </section>
            <section>
               <Checkbox className="text-sm">{item.title}</Checkbox>
            </section>
         </>
      }>
      </Card>
   )
};