import './appHeader.css';
import headerUserIcon from '../avatar.png';
import { IoBookOutline } from 'react-icons/io5';
import { MdOutlineContactPhone } from 'react-icons/md';
import { GoProjectSymlink } from 'react-icons/go';

const AppHeader = () => {
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
      <div className='profileHeaderContainer'>
        <div className='profileHeaderWrapper'>
          <a className='tabContainer active'>
            <span className='tabWrapper'>
              <span className='iconContainer'>
                <IoBookOutline />
              </span>
              <h5 className='headerLabel'>Overview</h5>
            </span>
          </a>
          <a className='tabContainer'>
            <span className='tabWrapper'>
              <span className='iconContainer'>
                <GoProjectSymlink />
              </span>
              <h5 className='headerLabel'>Project</h5>
            </span>
          </a>
          <a className='tabContainer'>
            <span className='tabWrapper'>
              <span className='iconContainer'>
                <MdOutlineContactPhone />
              </span>
              <h5 className='headerLabel'>Contact</h5>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
export default AppHeader;
