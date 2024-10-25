import './sidebar.css';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io5';
import headerUserIcon from '../avatar.png';

const Sidebar = () => {
  return (
    <div className='sidebar-layout'>
      <div className=''>
        <div className='profile-wrapper'>
          <div className='profile-pic-wrapper'>
            <span>
              <a href='/' className='profile-image-anchor'>
                <img className='profile-image' src={headerUserIcon} />
              </a>
            </span>
            <div className='v-card-names-container'>
              <h1 className='vcard-names'>
                <span className='v-card-fullname'>Thabares Nazeer Basha</span>
                <span className='v-nickname'>
                  thabares ·<span> he/him</span>
                </span>
              </h1>
            </div>
          </div>
          <ul className='v-card-details'>
            <li className='vcard-detail pt-1'>
              <HiOutlineBuildingOffice2 className='p-icon' />
              <span className='p-label'>
                Deloitte Touche Tohmatsu India, LLP
              </span>
            </li>
            <li className='vcard-detail pt-1'>
              <CiLocationOn className='p-icon' />
              <span className='p-label'>Bangalore, India</span>
            </li>
            <li className='vcard-detail pt-1'>
              <AiOutlineMail className='p-icon' />
              <span className='p-label '>
                <a
                  href='mailto:thabaresnazeer.1995@gmail.com'
                  target='_blank'
                  className='link'
                >
                  thabaresnazeer.1995@gmail.com
                </a>
              </span>
            </li>
            <li className='vcard-detail pt-1'>
              <IoLogoLinkedin className='p-icon' />
              <span className='p-label'>
                <a
                  href='https://www.linkedin.com/in/thabares-nazeer/'
                  className='link'
                  target='_blank'
                >
                  in/thabares-nazeer
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
