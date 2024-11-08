import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 mt-5 bg-[#1c1c1c]">
    <form className="flex items-start justify-between w-full  ">
      <div className="w-1/2">

        <div className="text-sm text-gray-300 mb-0.5">
          <h3>Task Title</h3>
          <input
            type="text"
            placeholder="Make a Ui design"
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
          ></input>
        </div>

        <div className="text-sm text-gray-300 mb-0.5">
          <h3>Date</h3>
          <input type="date"  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "></input>
        </div>

        <div className="text-sm text-gray-300 mb-0.5">
          <h3> Assign To</h3>
          <input 
            type="text"
            placeholder="Employee Name"
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "              ></input>
        </div>
        <div className="text-sm text-gray-300 mb-0.5">
          <h3> Category</h3>
          <input
            type="text"
            placeholder="Design , dev, etc"
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "              ></input>
        </div>
      </div>

      <div className="w-2/5 flex flex-col items-start">
        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
        <textarea
          name=""
          id=" "
          cols="30"
          rows="10"
          className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
        ></textarea>
         <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"> create Task</button>

      </div>
      
    </form>
  </div>
  )
}

export default CreateTask
