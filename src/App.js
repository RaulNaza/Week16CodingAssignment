import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import Home from './components/Home';
import ContactList from './components/ContactList';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import Users from './components/Users';
import NewContact from './components/NewContact';
import NewUser from './components/NewUser';
import NoUser from './components/NoUser';
import EditContact from './components/EditContact';
import ThankYou from './components/ThankYou';

import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* Users route will need to be modified based on which user logs in */}
          <Route path='/Users' element={<Users/>}></Route>
          <Route path='/NewUser' element={<NewUser/>}></Route>
          <Route path='/NoUserFound' element={<NoUser/>}></Route>
          <Route path='/ContactList' element={<ContactList/>}></Route>
          <Route path='/NewContact' element={<NewContact/>}></Route>
          <Route path='/EditContact' element={<EditContact/>}></Route>
          <Route path='/ThankYou' element={<ThankYou/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
