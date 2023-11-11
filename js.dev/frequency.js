function countStringFrequency(strings) {
  return strings.reduce((frequency, str) => {
    frequency[str] = (frequency[str] || 0) + 1;
    return frequency;
  }, {});
}
