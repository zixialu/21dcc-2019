const CALIBRATION_TRIES = 60;

function calibrateDimension(dim) {
  for (let i = 0; i < CALIBRATION_TRIES; i++) {
    const signal = checkSignal();
    if (signal) {
      navigation[dim] = signal;
      break;
    }
  }
}

function calibrateY() {
  calibrateDimension('y');
}

function calibrateZ() {
  calibrateDimension('z');
}
