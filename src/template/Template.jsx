import { Outlet } from 'react-router-dom';
import AppHeader from '../pages/AppHeader';
import './template.css';
import Sidebar from '../components/Sidebar';

const Template = () => {
  return (
    <div>
      <AppHeader />
      <div className='application-main'>
        <div className='container-xl px-3 px-md-4 px-lg-5 mt-2'>
          <div className='Layout Layout--flowRow-until-md Layout--sidebarPosition-start Layout--sidebarPosition-flowRow-start'>
            <div className='Layout-sidebar'>
              <Sidebar />
            </div>
            <div className='Layout-main'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Template;
