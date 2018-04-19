const gulpTask = require('./gulpfile');
const args = process.argv.splice(2);
const isProduction = args[0] && args[0] === 'create';

gulpTask[isProduction ? 'create' : 'run']();