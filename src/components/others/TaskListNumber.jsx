import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
    <div className=' bg-red-600 w-[45%] px-9 b py-10  rounded-lg '> 
     <h2 className='text-xl'>0</h2>
     <h3 className='text-2xl'>New Task</h3>
    </div>
    <div className=' bg-yellow-500 w-[45%] px-9 b py-10  rounded-lg '> 
     <h2 className='text-xl'>0</h2>
     <h3 className='text-2xl'>New Task</h3>
    </div>
    <div className=' bg-blue-600 w-[45%] px-9 b py-10  rounded-lg '> 
     <h2 className='text-xl'>0</h2>
     <h3 className='text-2xl'>New Task</h3>
    </div>
    <div className=' bg-pink-600 w-[45%] px-9 b py-10  rounded-lg '> 
     <h2 className='text-xl'>0</h2>
     <h3 className='text-2xl'>New Task</h3>
    </div>
      
    </div>
  )
}

export default TaskListNumber
