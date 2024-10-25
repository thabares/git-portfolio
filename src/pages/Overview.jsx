import './overview.css';

const Overview = () => {
  return (
    <div className='overview-layout'>
      <div className='box'>
        <div className='box-body'>
          <div className='user-text mb-3'>
            <a href='/'>thabares</a>
          </div>
          <article className='container-lg'>
            <ul className='list-styled'>
              <li>👋 Hi, I’m @thabares</li>
              <li>
                👀 I’m interested in web development and open-source projects.
              </li>
              <li>
                🌱 I’m currently learning React.js and improving my Backend(Node
                JS, Express JS) skills.
              </li>
              <li>
                💞️ I’m looking to collaborate on projects that make a
                meaningful impact and push technological boundaries.
              </li>
              <li>
                📫 How to reach me: You can reach me via email at{' '}
                <a
                  className='body-link'
                  href='mailto:thabaresnazeer.1995@gmail.com'
                >
                  thabaresnazeer.1995@gmail.com
                </a>{' '}
                or connect with me on{' '}
                <a
                  target='_blank'
                  className='body-link'
                  href='https://www.linkedin.com/in/thabares-nazeer/'
                >
                  LinkedIn
                </a>
                .
              </li>
              <li>😄 Pronouns: He/Him</li>
              <li>
                ⚡ Fun fact: I love watching movies and listening to music.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
};
export default Overview;
