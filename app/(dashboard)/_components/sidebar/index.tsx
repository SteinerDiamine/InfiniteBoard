

import React from 'react';
import { NewButton } from './new-button';
import { List } from './List';


const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-gradient-to-b from-blue-900 to-blue-700 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white rounded-r-3xl shadow-xl">
      
     
      <List/>
     
      <NewButton/>
    </aside>
    
  );
};

export default Sidebar;





