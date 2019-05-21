function decodeMessage(message) {
  const matchDigit = /\d/g;
  const decoder = (match) => {
    switch (match) {
      case '0': return 'o';
      case '1': return 'i';
      case '2': return 'u';
      case '3': return 'e';
      case '4': return 'a';
      case '5': return 'y';
      default: return match;
    }
  };
  return message.replace(matchDigit, decoder);
}
