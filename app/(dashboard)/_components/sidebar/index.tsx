// import React from 'react'

// const Sidebar = () => {
//   return (
//     <aside className='fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-orange-1'>Sidebar</aside>
//   )
// }

// export default Sidebar


import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-gradient-to-b from-blue-900 to-blue-700 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white rounded-r-3xl shadow-xl">
      <div className="text-center mb-6 text-dark-1 font-bold">Menu</div>
      <ul className="flex flex-col gap-4">
        <li className="bg-dark-1 h-10 w-10 rounded-full flex items-center justify-center text-blue-950 shadow-md hover:bg-orange-500 cursor-pointer transition">
          A
        </li>
        <li className="bg-dark-1 h-10 w-10 rounded-full flex items-center justify-center text-blue-950 shadow-md hover:bg-orange-500 cursor-pointer transition">
          B
        </li>
        <li className="bg-dark-4 h-10 w-10 rounded-full flex items-center justify-center text-blue-950 shadow-md hover:bg-orange-500 cursor-pointer transition">
          C
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

