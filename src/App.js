import { BrowserRouter,Route, Routes  } from 'react-router-dom';

import './App.css';
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import MyProjects from './Components/MyProject/MyProject.jsx';
import Contacts from './Components/Contacts/Contacts.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/my_projects" element={<MyProjects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
