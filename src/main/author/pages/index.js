import page from './page';
import templateUrl from './pages.jade';

export default {
  name: 'pages',
  url: '/pages',
  templateUrl,
  children: [
    page
  ]
};
