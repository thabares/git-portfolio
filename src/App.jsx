import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const App = () => {
  return (
    <div>
      <Home />
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};
export default App;
