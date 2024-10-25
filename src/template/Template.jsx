import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../pages/AppHeader';
import './template.css';

const Template = () => {
  return (
    <div>
      <AppHeader />
      <div className='app-container'>
        <div className='template-wrapper'>
          <div className='app-wrapper'>
            <div className='sidebar-wrapper'>
              <Sidebar />
            </div>
            <div className='content-wrapper mt-5'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Template;
