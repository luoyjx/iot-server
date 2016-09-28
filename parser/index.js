/**
 * 用于数据解析
 * @authors yanjixiong
 * @date    2016-09-28 13:32:26
 */

/**
 * 解析
 *
 * 这里为什么是datas而不是data，是因为很有可能因为网络拥塞
 * 导致数据包连包（也就是一次接收到了一个以上的数据包内容）
 * 这时是需要先进行切分的。
 *
 * 所以在约定协议时应该定义多个包之间的分隔符或者说是一个包的结束符
 * 
 * @param  {[type]} datas [description]
 * @return {[type]}       [description]
 */
exports.parse = function parse(datas) {
  // 这里暂时设包间的分隔符为  \r\n
  var package_divider = '\r\n';
  var dataArr = datas.split(package_divider);

  return dataArr.map(function(dataStr) {
    return _parsePackage(dataStr);
  });
}

/**
 * 解析一个包的数据
 *
 * 一般来说，做通信都会约定一个通信协议，
 * 所以一般传输时不会是json的格式，而是自定义的格式
 * 这里就是将自定义格式转化成json字符串的一个过程
 * 
 * @param  {[type]} dataStr [description]
 * @return {[type]}         [description]
 */
function _parsePackage(dataStr) {
  // 假设接收的数据是这种形式
  // a=1#b=2#c=3
  // 那么最终需要转换成什么样呢
  // {"a":1,"b":2,"c":3}
  // 这样就是正确的json字符串，注意双引号
  // 具体的根据具体协议而定


  return dataStr;
}

