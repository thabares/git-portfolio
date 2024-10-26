import { createContext, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppHeader from '../pages/AppHeader';
import './template.css';

export const LoadingContext = createContext(false);

const Template = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Loading...');

  useEffect(() => {
    let interval;

    if (isLoading) {
      interval = setInterval(() => {
        setLoadingText((prev) => {
          if (prev === 'Loading...') return 'Loading..';
          if (prev === 'Loading..') return 'Loading.';
          return 'Loading...';
        });
      }, 500);
    } else {
      setLoadingText('Loading...');
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
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
      {isLoading && (
        <div className='overlay'>
          <div className='overlay-text'>{loadingText}</div>
        </div>
      )}
    </LoadingContext.Provider>
  );
};

export default Template;
