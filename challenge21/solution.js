function broadcastCoordinateRequests() {
  const requests = ['x', 'y', 'z'];
  return requests.map(req => broadcast(req));
}

function decodeMessage(message) {
  const matchDigit = /\d/g;
  const decoder = (match) => {
    const vowels = ['o', 'i', 'u', 'e', 'a', 'y'];
    return vowels[match] || match;
  };
  return message.replace(matchDigit, decoder);
}

function returnToEarth() {
  const [x, y, z] = broadcastCoordinateRequests()
    .map(res => decodeMessage(res))
    .map(dim => parseInt(dim, 16));

  Object.assign(navigation, { x, y, z });
}
