function setSpeed(speed) {
  const parsedSpeed = parseInt(speed, 10);
  if (parsedSpeed >= 0) navigation.speed = parsedSpeed;
}
