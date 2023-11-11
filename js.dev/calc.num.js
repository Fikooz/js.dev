function averageOfEvenNumbers(numbers) {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  if (evenNumbers.length === 0) return 0;
  const sum = evenNumbers.reduce((acc, number) => acc + number, 0);
  return sum / evenNumbers.length;
}
