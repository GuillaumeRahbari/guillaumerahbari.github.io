import {
  faHome,
  faUserCircle,
  faUniversity,
  faBuilding,
  faCog,
  faCode,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
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
  {
    index: '3',
    route: '/experience',
    text: 'Experiences',
    component: About,
    icon: faBuilding,
  },
  {
    index: '4',
    route: '/education',
    text: 'Education',
    component: About,
    icon: faUniversity,
  },
  {
    index: '5',
    route: '/skills',
    text: 'Skills',
    component: About,
    icon: faCog,
  },
  {
    index: '6',
    route: '/projects',
    text: 'Projects',
    component: About,
    icon: faCode,
  },
  {
    index: '7',
    route: '/languages',
    text: 'Languages',
    component: About,
    icon: faGlobe,
  },
];
