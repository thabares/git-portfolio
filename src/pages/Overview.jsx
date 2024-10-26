import './overview.css';

const Overview = () => {
  const jobs = [
    { start: '2019-11-25', end: '2021-08-30' },
    { start: '2021-09-13', end: '2022-10-17' },
    { start: '2022-10-31' },
  ];

  // function calculateExperience(jobs) {
  //   let totalMonths = 0;

  //   jobs.forEach((job) => {
  //     const startDate = new Date(job.start);
  //     const endDate = job.end ? new Date(job.end) : new Date(); // If no end date, assume it's the current date

  //     const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  //     const monthsDiff = endDate.getMonth() - startDate.getMonth();

  //     totalMonths += yearsDiff * 12 + monthsDiff;
  //   });

  //   const years = Math.floor(totalMonths / 12);
  //   const months = totalMonths % 12;

  //   return `${years} years and ${months} months`;
  // }

  function calculateTotalExperience(jobs) {
    let totalYears = 0;
    let totalMonths = 0;
    let totalDays = 0;

    jobs.forEach((job) => {
      const start = new Date(job.start);
      const end = job.end ? new Date(job.end) : new Date(); // Use current date if end date is not provided

      // Calculate the difference
      let years = end.getFullYear() - start.getFullYear();
      let months = end.getMonth() - start.getMonth();
      let days = end.getDate() - start.getDate();

      // Adjust for negative days
      if (days < 0) {
        months--;
        // Get the last day of the previous month
        const lastMonthDate = new Date(end.getFullYear(), end.getMonth(), 0);
        days += lastMonthDate.getDate();
      }

      // Adjust for negative months
      if (months < 0) {
        years--;
        months += 12;
      }

      // Accumulate totals
      totalYears += years;
      totalMonths += months;
      totalDays += days;
    });

    // Adjust total days and months
    if (totalDays >= 30) {
      totalMonths += Math.floor(totalDays / 30);
      totalDays = totalDays % 30;
    }

    if (totalMonths >= 12) {
      totalYears += Math.floor(totalMonths / 12);
      totalMonths = totalMonths % 12;
    }

    // Prepare the output string
    let experienceString;
    if (totalMonths >= 11) {
      experienceString = `nearly ${totalYears + 1} year${
        totalYears + 1 !== 1 ? 's' : ''
      }`;
    } else if (totalMonths >= 6) {
      experienceString = `about ${totalYears} year${
        totalYears !== 1 ? 's' : ''
      }`;
    } else {
      experienceString = `${totalYears} year${
        totalYears !== 1 ? 's' : ''
      } and ${totalMonths} month${totalMonths !== 1 ? 's' : ''}`;
    }

    // Log total years, months, and days
    console.log(
      `Total Experience: ${totalYears} year${
        totalYears !== 1 ? 's' : ''
      }, ${totalMonths} month${
        totalMonths !== 1 ? 's' : ''
      }, and ${totalDays} day${totalDays !== 1 ? 's' : ''}`
    );

    return experienceString; // Return the formatted experience string
  }

  const totalExperience = calculateTotalExperience(jobs);

  return (
    <div className='overview-layout'>
      <div className='box'>
        <div className='box-body'>
          <div className='user-text mb-3'>
            <a href='/'>/thabares</a>
          </div>
          <article className='container-lg'>
            <ul className='list-styled'>
              <li>👋 Hi, I’m @thabares</li>
              <li>
                👀 I’m interested in web development and open-source projects.
              </li>
              <li>
                🌱 I have {totalExperience} of experience working with React.js
                and am currently enhancing my skills in backend development with
                Node.js and Express.js, having worked on several projects in
                this area.
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
                ⚡ Fun fact: I love traveling, watching movies and listening to
                music.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
};
export default Overview;
