import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import Alltask from "../others/Alltask";

const AdminDashboard = () => {
  return (
    <div className="h-full w-full p-10">
      <Header />
      <CreateTask/>
      <Alltask/>
      
    </div>
  );
};

export default AdminDashboard;
