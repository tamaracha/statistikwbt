import template from './basics.jade';
export default {
  name: 'basics',
  url: '/basics',
  template,
  ncyBreadcrumb: {label: '{{topic.topic.title}} — Grunddaten'}
};
