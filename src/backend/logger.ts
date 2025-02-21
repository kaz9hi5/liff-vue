import log4js from 'log4js';

log4js.configure({
  appenders: { 
    log: { 
      type: 'console', 
      layout: {
        type: 'pattern',
        pattern: '%d %p %m%n',
      },
    } 
  },
  categories: { 
    default: { 
      appenders: ['log'], 
      level: 'all'
    } 
  },
});
export default log4js.getLogger('default');
