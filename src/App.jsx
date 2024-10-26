import { Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Contact from './pages/Contact';
import Template from './template/Template';
import Experience from './pages/Experience';

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Template />}>
          <Route path='/' element={<Overview />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
