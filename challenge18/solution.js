const BROADCAST_TIMES = 100;

function sendBroadcast() {
  for (let i = 0; i < BROADCAST_TIMES; i++) {
    broadcast();
  }
}

sendBroadcast();
