function setFrequency() {
  const { low, high } = radio.range;
  radio.frequency = (low + high) / 2;
}
