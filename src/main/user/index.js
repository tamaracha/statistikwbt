import templateUrl from './user.html';
import controller from './user-controller';
import profile from './profile';

export default {
  name: 'user',
  url: '/user',
  templateUrl,
  controller,
  controllerAs: 'user',
  data: {
    permissions: {
      except: ['anonymous']
    }
  },
  children: [
    profile
  ]
};
