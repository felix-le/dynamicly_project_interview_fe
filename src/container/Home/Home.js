import { NavItem, NavLink } from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';
const Home = () => {
  return (
    <main className='mt-5'>
      <div className='container'>
        <h1 className='mb-3 text-uppercase'>
          We are{' '}
          <span className='font-weight-bold text-secondary'>
            dynamicly family
          </span>
        </h1>
        <div className='video-wrapper'>
          <video className='video-introduce' controls>
            <source
              src='https://dynamicly.herokuapp.com/videos/dynamicly.mp4'
              type='video/mp4'
            />
          </video>
        </div>
        <div className='group-btn-wrapper mt-5'>
          <ul className='list-link d-flex flex-wrap w-100'>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                to='/expense'
                activeClassName='active'
                className='btn btn-success text-white'
              >
                Requirement
              </NavLink>
            </NavItem>
            <li>
              <a
                href='https://github.com/felix-le/dynamicly_project_interview_fe'
                className='link-cta btn btn-info text-white'
                rel='noreferrer'
                target='_blank'
              >
                Front-end
              </a>
            </li>

            <li>
              <a
                href='https://github.com/felix-le/dynamicly_project_interview_be'
                className='link-cta btn  btn-primary text-white'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                Back-end
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
