import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Users from './components/Users';
import NewUser from './components/NewUser';
import ContactList from './components/ContactList';
import EditUser from './components/EditUser';
import NewUserContact from './components/NewUserContact';
import ThankYou from './components/ThankYou';
import NoUser from './components/NoUser';
import NotFound from './components/NotFound';



function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Users' element={<Users />}></Route>
          <Route path='/NewUser' element={<NewUser />}></Route>
          <Route path='/ContactList' element={<ContactList />}></Route>
          <Route path='/EditUser' element={<EditUser />}></Route>
          <Route path='/NewUserContact' element={<NewUserContact />}></Route>
          <Route path='/ThankYou' element={<ThankYou />}></Route>
          <Route path='/NoUserFound' element={<NoUser />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
