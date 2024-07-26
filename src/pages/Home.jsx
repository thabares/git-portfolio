import './appHeader.css';
import headerUserIcon from '../avatar.png';
import { IoBookOutline } from 'react-icons/io5';
import { MdOutlineContactPhone } from 'react-icons/md';
import { GoProjectSymlink } from 'react-icons/go';
import { useNavigate, useLocation } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const handleRedirect = (pageUrl) => {
    return navigate(pageUrl);
  };
  return (
    <header className='appHeaderContainer'>
      <div className='headerWrapper'>
        <div className='headerContainer'>
          <a className='userNameContainer'>
            <h5 className='userName'>thabares</h5>
          </a>
        </div>
        <div className='appHeaderUser'>
          <button className='appHeaderUserButton'>
            <span className='button-content'>
              <span className='button-label'>
                <img
                  src={headerUserIcon}
                  alt='headerUserIcon'
                  className='avatar'
                  size={30}
                  height={30}
                  width={30}
                />
              </span>
            </span>
          </button>
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
export default Home;
