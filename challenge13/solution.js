const CALIBRATION_TRIES = 12;

function calibrateX() {
  for (let i = 0; i < CALIBRATION_TRIES; i++) {
    const signal = checkSignal();
    if (signal) {
      navigation.x = signal;
      break;
    }
  }
}

calibrateX();
