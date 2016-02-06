import templateUrl from './content.jade';
import unit from './unit';

export default {
  name: 'content',
  url: '/content',
  templateUrl,
  data: {
    permissions: {
      except: ['anonymous']
    }
  },
  children: [
    unit
  ]
};
