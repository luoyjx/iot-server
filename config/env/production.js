/**
 * production config
 *
 * 生产环境配置
 * 
 * @authors yanjixiong
 * @date    2016-09-28 14:11:50
 */

module.exports = {
  'servers': [
    {'id': '1', 'alias': 'tcp通讯', 'host': '0.0.0.0', 'port': 8888, 'protocol': 'tcp'},
  ]
};