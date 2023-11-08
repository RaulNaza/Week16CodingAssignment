import './App.css';
import Home from './components/Home';
import ContactList from './components/ContactList';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';

import { Route, Routes} from 'react-router-dom';
import NewContact from './components/NewContact';


function App() {
  return (
    <div className="App">
      <>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/ContactList' element={<ContactList/>}></Route>
          <Route path='/NewContact' element={<NewContact/>}></Route>
          the below path should be dynamic and take in an ID based on the contact chosen
          <Route path='/ContactList/:id' element={<Contact/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
