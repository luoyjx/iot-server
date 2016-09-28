/**
 * config 
 * @authors yanjixiong
 * @date    2016-09-28 14:10:16
 */

var env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

console.log('load %s config', env);

module.exports = require('./env/' + env);