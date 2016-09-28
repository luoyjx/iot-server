/**
 * validator
 * @authors yanjixiong
 * @date    2016-09-28 14:29:00
 */

/**
 * 是否是本地ip
 * @param address 远程ip
 * @param localAddress 本地ip
 * @return {boolean}
 */
exports.isLocalAddress = function(address, localAddress){
    if(address === undefined){
        return false;
    }
    var flag = true;
    if(address.indexOf('127.0.0.1') === -1 && address.indexOf('localhost') === -1 && address !== localAddress){
      flag = false;
    }
    return flag;
};