import { Link, Outlet } from 'react-router-dom';

import Header from '../Header.jsx';
import EventsIntroSection from './EventsIntroSection.jsx';
import FindEventSection from './FindEventSection.jsx';
import NewEventsSection from './NewEventsSection.jsx';
import Login from '../Login/Login.jsx';

export default function Events() {
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events/new" className="button">
          New Event
        </Link>
      </Header>
      <main>
        <EventsIntroSection />
        <NewEventsSection />
        <FindEventSection />
      </main>
      <Login />
    </>
  );
}
