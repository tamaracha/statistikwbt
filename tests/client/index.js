require('../../src/');

const testsContext = require.context('./src/', true);
testsContext.keys().forEach(testsContext);
