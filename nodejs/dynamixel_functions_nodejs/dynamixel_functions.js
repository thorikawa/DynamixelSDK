var ffi = require('ffi');

var dxl = ffi.Library('../../c/build/win64/output/dxl_x64_c.dll', {
  'portHandler': ['int', ['string']],

  'openPort': ['uint8', ['int']],
  'closePort': ['void', ['int']],
  'clearPort': ['void', ['int']],

  'setBaudRate': ['uint8', ['int', 'int']],
  'getBaudRate': ['int', ['int']],

  'packetHandler': ['void', []],
  'getTxRxResult': ['string', ['int', 'int']],
  'printTxRxResult': ['void', ['int', 'int']],
  'getRxPacketError': ['string', ['int', 'uint8']],
  'printRxPacketError': ['void', ['int', 'uint8']],

  'getLastTxRxResult': ['int', ['int', 'int']],
  'getLastRxPacketError': ['uint8', ['int', 'int']],

  'ping': ['void', ['int', 'int', 'uint8']],
  'broadcastPing': ['void', ['int', 'int']],
  'getBroadcastPingResult': ['uint8', ['int', 'int', 'int']],

  'reboot': ['void', ['int', 'int', 'uint8']],

  'read1ByteTxRx': ['uint8', ['int', 'int', 'uint8', 'uint16']],
  'read2ByteTxRx': ['uint16', ['int', 'int', 'uint8', 'uint16']],
  'read4ByteTxRx': ['uint32', ['int', 'int', 'uint8', 'uint16']],

  'write1ByteTxRx': ['void', ['int', 'int', 'uint8', 'uint16', 'uint8']],
  'write2ByteTxRx': ['void', ['int', 'int', 'uint8', 'uint16', 'uint16']],
  'write4ByteTxRx': ['void', ['int', 'int', 'uint8', 'uint16', 'uint32']],

  'groupBulkWrite': ['int', ['int', 'int']],
  'groupBulkWriteAddParam': ['uint8', ['int', 'uint8', 'uint16', 'uint16', 'uint32', 'uint16']],
  'groupBulkWriteRemoveParam': ['void', ['int', 'uint8']],
  'groupBulkWriteChangeParam': ['uint8', ['int', 'uint8', 'uint16', 'uint16', 'uint32', 'uint16', 'uint16']],
  'groupBulkWriteClearParam': ['void', ['int']],
  'groupBulkWriteTxPacket': ['void', ['int']],

  'groupBulkRead': ['int', ['int', 'int']],
  'groupBulkReadAddParam': ['uint8', ['int', 'uint8', 'uint16', 'uint16']],
  'groupBulkReadRemoveParam': ['void', ['int', 'uint8']],
  'groupBulkReadClearParam': ['void', ['int']],
  'groupBulkReadTxPacket': ['void', ['int']],
  'groupBulkReadRxPacket': ['void', ['int']],
  'groupBulkReadTxRxPacket': ['void', ['int']],
  'groupBulkReadIsAvailable': ['uint8', ['int', 'uint8', 'uint16', 'uint16']],
  'groupBulkReadGetData': ['uint32', ['int', 'uint8', 'uint16', 'uint16']],
});

module.exports = dxl;