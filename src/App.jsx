


import {  useContext, useState } from 'react';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import { Toaster, toast } from 'react-hot-toast'; 
import { AuthContext } from './context/AuthProvider';

const App = () => {
  let [user, setUser] = useState();

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
    } else if (email === 'user@me.com' && password === '123') {
      setUser('employee');
    } else {
      toast.error('Invalid Credentials');
    }
  };
  const data=useContext(AuthContext)
  console.log(data)

  return (
    <>
    <Toaster/>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {/* {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />} */}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard />}
    </>
  );
};

export default App;

