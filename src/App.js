import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Profile from './components/Profile';
import Account from './components/Account';
import { useState } from 'react';
function App() {
  let data={
    monthly:40000,
    yearly:480000,
    task:50,
    pending:18
  }

  let [user,setUser] = useState([
    {
      firstname: "sathish",
      lastname: "r",
      email: "sathish.r@gmail.com",
      mobile: "23264757",
      dob: "12-05-2017",
      location: "chennai",
    },
    {
      firstname: "kumar",
      lastname: "r",
      email: "kumar.r@gmail.com",
      mobile: "254664757",
      dob: "16-05-2017",
      location: "chennai",
    },
    {
      firstname: "sparkzz",
      lastname: "r",
      email: "sparkzz.r@gmail.com",
      mobile: "23269804757",
      dob: "22-05-2017",
      location: "chennai",
    },
    {
      firstname: "sathish",
      lastname: "sparkzz",
      email: "sathish.sparkzz@gmail.com",
      mobile: "2326475117",
      dob: "07-05-2017",
      location: "chennai",
    },
  ])
  return <>
  <div id="wrapper">
    <BrowserRouter>
      <SideBar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content"> 
          <Routes>
            <Route path='/dashboard' element={<Dashboard data={{data,user,setUser}}/>}>
              <Route path='profile' element={<Profile/>}/>
              <Route path='account' element={<Account/>}/>
            </Route>
            <Route path='/add-user' element={<CreateUser data={{user,setUser}}/>}/>
            <Route path='/edit-user/:id' element={<EditUser data={{user,setUser}}/>}/>
            <Route path='*' element={<Navigate to='/dashboard'/>}/>
          </Routes> 
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    
  </div>
  </>
}

export default App;
