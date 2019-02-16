import { faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Home } from '../home';
import { About } from '../about';

export const PAGES = [
  {
    index: '1',
    route: '/',
    text: 'Home',
    component: Home,
    icon: faHome,
  },
  {
    index: '2',
    route: '/about',
    text: 'About me',
    component: About,
    icon: faUserCircle,
  },
];
