import React from 'react';

const DashboardPage = () => {
  return (
    <div className='bg-dark-4 flex-1 pt-10 mt-3 rounded-lg h-[calc(100vh-80px)] overflow-auto p-6'>
      <h1 className='text-white text-4xl font-bold mb-8'>Dashboard</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Card 1 */}
        <div className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6'>
          <h2 className='text-gray-800 font-semibold text-xl'>Card Title 1</h2>
          <p className='text-gray-600 mt-2'>Some descriptive text here.</p>
          <button className='mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105'>
            Action
          </button>
        </div>

        {/* Card 2 */}
        <div className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6'>
          <h2 className='text-gray-800 font-semibold text-xl'>Card Title 2</h2>
          <p className='text-gray-600 mt-2'>Some descriptive text here.</p>
          <button className='mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105'>
            Action
          </button>
        </div>

        {/* Card 3 */}
        <div className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6'>
          <h2 className='text-gray-800 font-semibold text-xl'>Card Title 3</h2>
          <p className='text-gray-600 mt-2'>Some descriptive text here.</p>
          <button className='mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105'>
            Action
          </button>
        </div>

        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default DashboardPage;
