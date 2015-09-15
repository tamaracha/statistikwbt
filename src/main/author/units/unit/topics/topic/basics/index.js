import template from './basics.jade';
export default {
  name: 'basics',
  url: '/basics',
  templateUrl: template,
  ncyBreadcrumb: {label: '{{topic.topic.title}} — Grunddaten'}
};
