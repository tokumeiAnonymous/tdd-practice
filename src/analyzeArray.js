export const analyzeArray = (arrayOfNumbers) => Object.freeze({
  average:  (arrayOfNumbers.reduce((previous, current) => previous += current, 0)) / arrayOfNumbers.length,
  
  min: arrayOfNumbers.reduce((previous, current) => {
    previous = Math.min(previous, current);
    return previous;
  }, arrayOfNumbers[0]),

  max: arrayOfNumbers.reduce((previous, current) => {
    previous = Math.max(previous, current);
    return previous;
  }, arrayOfNumbers[0]),

  length: arrayOfNumbers.length
});