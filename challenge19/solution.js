const BROADCAST_TIMES = 100;

function setFrequency() {
  const { low, high } = radio.range;
  radio.frequency = (low + high) / 2;
}

function activateAntenna() {
  ship.antenna.active = true;
}

function sendBroadcast() {
  for (let i = 0; i < BROADCAST_TIMES; i++) {
    broadcast();
  }
}

function configureBroadcast() {
  setFrequency();
  activateAntenna();
  sendBroadcast();
}

configureBroadcast();
