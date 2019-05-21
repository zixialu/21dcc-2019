function decodeMessage(message) {
  const matchDigit = /\d/g;
  const decoder = (match) => {
    const vowels = ['o', 'i', 'u', 'e', 'a', 'y'];
    return vowels[match] || match;
  };
  return message.replace(matchDigit, decoder);
}
