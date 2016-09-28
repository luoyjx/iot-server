/**
 * 消息字典
 * @authors yanjixiong
 * @date    2016-09-28 13:19:57
 */

module.exports = {
  "index" : {
    "conn_open" : "创建连接",
    "data_accept" : "接收到数据 ",
    "data_send" : "数据发送 ",
    "conn_close" : "连接关闭",
    "conn_timeout_destory" : "连接长时间闲置，超时，销毁连接",
    "server_start" : "服务端启动,监听端口：",
    "data_server_start" : "数据服务启动，监听端口",
    "tcp_disable" : "TCP服务器异常或不可用",
    "clean_conn" : "清理连接",
    "alive_conn" : "活动连接数:",
    "webserver_start" : "web服务启动，监听端口：",
    "server_status_push" : "推送服务端状态",
    "pkg_info_insert_fail": "数据包信息存储失败",
    "store_and_reset_minute_count": "存储并重置分钟计数"
  },
  "receive" : {
    "log_fail_data_lost" : "数据丢失 日志记录失败",
    "exception_data_lost" : "数据包异常或丢失",
    "data_normal" : "数据正常",
    "log_fail_crc_incorrect" : "crc校验失败 日志记录失败",
    "crc_correct" : "crc校验成功",
    "crc_incorrect" : "crc校验失败"
  },
  "handler" : {
    "mq_null" : "消息队列无数据",
    "mq_pop_success" : "队列出队成功",
    "insert_fail" : "入库失败",
    "insert_success" : "入库成功",
    "mq_repush" : "重新加入消息队列"
  },
  "service": {
    "check_tcp_status_start": "检查通讯状态任务启动",
    "clear_conn_start" : "清理socket连接任务启动",
    "period_counter_start" : "阶段计数器任务启动",
    "push_system_status_start": "推送系统状态任务启动",
    "store_pkginfo_start" : "存储数据包信息任务启动",
    "clear_nodata_start" : "清理无数据连接任务启动",
    "push_device_status_start" : "推送设备信息任务启动",
    "memory_status_start" : "内存使用情况任务启动",
    "push_device_status" : "推送设备信息"
  },
  "database" : {
    "init_db" : "初始化数据连接",
    "insert_fail" : "错误数据 入库失败"
  },
  "message_queue" : {
    "null_illegal" : "数据为空或非法"
  },
  "websocket" : {
    "join_channel" : "加入频道",
    "websocket_disconnect": "websocket断开连接",
    "leave_channel" : "离开频道"
  }
};