const dxl = require('../dynamixel_functions_nodejs/dynamixel_functions');

PROTOCOL_VERSION = 2
ADDR_TORQUE_ENBLE = 64
ADDR_GOAL_POSITION = 116
ADDR_PRESENT_POSITION = 132
TORQUE_ENABLE = 1
COMM_SUCCESS = 0
MAX_ID = 252

var portNum = dxl.portHandler("COM10")
dxl.packetHandler();
if (dxl.openPort(portNum)) {
	console.log("Succeeded to open port!");
} else {
	console.warn("Failed to open the port!");
}
if (dxl.setBaudRate(portNum, 57600)) {
	console.log("Succeeded to change the baudrate!")
}

/*
dxl.broadcastPing(portNum, PROTOCOL_VERSION);
// dxl.write1ByteTxRx(portNum, PROTOCOL_VERSION, 1, ADDR_TORQUE_ENABLE, TORQUE_ENABLE)
let commResult = dxl.getLastTxRxResult(portNum, PROTOCOL_VERSION)
for (let i = 0; i < MAX_ID; i++) {
	var value = dxl.getBroadcastPingResult(portNum, PROTOCOL_VERSION, i);
	if (value > 0) {
		console.log("servo id:" + i + " found");
	}
}
*/

dxl.write4ByteTxRx(portNum, PROTOCOL_VERSION, 2, ADDR_GOAL_POSITION, 2000);
commResult = dxl.getLastTxRxResult(portNum, PROTOCOL_VERSION);
console.log(commResult);

let presentPosition = dxl.read4ByteTxRx(portNum, PROTOCOL_VERSION, 2, ADDR_PRESENT_POSITION);
console.log(presentPosition);

