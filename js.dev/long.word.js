function longestWord(words) {
  return words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
}
