/**
 * server 
 * @authors yanjixiong
 * @date    2016-09-28 12:56:43
 */

var net = require('net');
var lang = require('./lang');
var parser = require('./parser');
var validator = require('./common/validator');

var tcpServer = net.createServer();

var appContext = {
  //消息队列操作任务开关
  taskSwitch : false,
  //socket容器,接收到数据包的连接,未收到数据包的连接不缓存
  infoContainer : {},
  //socket server状态  正常：1   异常 0
  serverStatus : {
    0: {
      alias: '通讯服务器',
      alive: 1, // 存活
      connections: 0,
    }
  },
};

var appStatic = {
    //socket连接超时时间,单位毫秒
    'TCP_SOCKET_TIMEOUT' : 600000,

    //redis中消息队列的队列名
    'queue' : {
      'data' : 'test_queue'
    },

    'status' : { //状态
      '1' : ''
    },

};


tcpServer.on('connection', function(socket_cli) {
  var remotePort = socket_cli.remotePort; // 远程端口
  var remoteAddress = socket_cli.remoteAddress; // 远程ip
  var localPort = socket_cli.localPort; // 本地端口
  var localAddress = socket_cli.localAddress; // 本地ip

  if(!validator.isLocalAddress(remoteAddress, localAddress)){
    //该服务的连接计数
    appContext.serverStatus[0].connections++;
    //连接超过闲置时间没有数据则超时，触发timeout事件
    socket_cli.setTimeout(appStatic.TCP_SOCKET_TIMEOUT);
    console.log(lang.index.conn_open + remoteAddress +':'+ remotePort);
    console.log(appContext.serverStatus[0].alias + '-' + lang.index.alive_conn + appContext.serverStatus[0].connections);
  }

  /**
   * 接收到数据事件
   */
  socket_cli.on('data', function(data) {
    if(!data){ // 为空则跳出
      return;
    }
    
    console.log(lang.index.data_accept + remoteAddress+ ':'+ remotePort + ' : ' + data);
    var dataParseredArrArr = parser.parse(data + '');
    if(!dataParseredArrArr || dataParseredArr.length == 0){
      return;
    }
    var len = dataParseredArr.length;
    for(var i = 0; i < len; i++){
      if(!dataParseredArr[i]){
        continue;
      }
      //解析后的json对象字符串化入队操作
      queue.push(appStatic.queue.data, dataParseredArr[i]);
      // 将解析后的json字符串转换成对象
      var obj = null;

      try {
        obj = JSON.parse(dataParseredArr[i]);
      } catch (err) {
        console.error(err);
      }

      if(obj && obj.id){
        //接收到数据包的socket客户端加入info容器中
        appContext.infoContainer[obj.id] = socket_cli;
      }
    }
  });

  /**
   * 连接关闭事件
   */
  socket_cli.on('close', function(data) {
    var flag = validator.isLocalAddress(remoteAddress, localAddress);
    if(!flag){
      appContext.serverStatus[0].connections--;
      sysTask.clearConnection();
    }
    console.log((flag ? '本地' : '远程') + lang.index.conn_close);
  });

  /**
   * 连接出错事件
   */
  socket_cli.on('error', function(e){
    socket_cli.destroy();
    console.error(e);
  });

  /**
   * socket连接上时设置超时事件，当在超时时间段内一直闲置时会触发此事件
   * 此时销毁此socket连接
   */
  socket_cli.on('timeout', function(){
    socket_cli.destroy();
    if(!validator.isLocalAddress(remoteAddress, localAddress)){
      appContext.serverStatus[0].connections--;
    }
    console.log(lang.index.conn_timeout_destory);
  });
});