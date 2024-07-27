import './appHeader.css';
import headerUserIcon from '../avatar.png';
import { IoBookOutline } from 'react-icons/io5';
import { MdOutlineContactPhone } from 'react-icons/md';
import { GoProjectSymlink } from 'react-icons/go';
import { useNavigate, useLocation } from 'react-router-dom';

const AppHeader = () => {
  const location = useLocation();
  return (
    <header className='appHeaderContainer'>
      <div className='appHeaderGlobalBar pb-2'>
        <div className='appHeaderGlobalBarStart'>
          <div className='appHeaderContext'>
            <div className='appHeaderContextFull'>
              <nav>
                <ul className='list-style-none'>
                  <li>
                    <a className='appHeaderContextItem' href='/'>
                      <span className='appHeaderContextItemLabel'>
                        thabares
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className='appHeaderGlobalBarEnd'>
          <div className='appHeaderUser'>
            <button className='buttonInvisible color-bg-transparent p-0'>
              <span className='buttonContent'>
                <span className='buttonLabel'>
                  <img
                    src={headerUserIcon}
                    alt=''
                    height={25}
                    width={25}
                    className='avatar'
                  />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className='appHeaderLocal'>
        <nav className='overflow-hidden underlineNav'>
          <ul className='underLineNavBody list-style-none'>
            <li className='inlineFlex'>
              <a
                href='/'
                className={`underlineNavItem no-wrap 
                  ${location.pathname === '/' && `selected`}`}
              >
                <IoBookOutline className='overviewIcon' />
                <span>Overview</span>
              </a>
            </li>

            <li className='inlineFlex'>
              <a
                href='/projects'
                className={`underlineNavItem no-wrap 
                  ${location.pathname === '/projects' && `selected`}`}
              >
                <GoProjectSymlink className='overviewIcon' />
                <span>Projects</span>
              </a>
            </li>

            <li className='inlineFlex'>
              <a
                href='/contact'
                className={`underlineNavItem no-wrap 
                  ${location.pathname === '/contact' && `selected`}`}
              >
                <MdOutlineContactPhone className='overviewIcon' />
                <span>Contacts</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default AppHeader;
