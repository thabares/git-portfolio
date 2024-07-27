import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Template from './template/Template';

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Template />}>
          <Route path='/' element={<Overview />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
