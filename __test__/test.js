const calculateNumbersOfCastlesToBuild = require('../index')

describe('calculateNumbersOfCastlesToBuild', () => {
  test('should validate incorrect inputs', () => {
    const incorrectInputs = [
      { input: [], expected: 0 },
      { input: 2, expected: 0 },
      { input: undefined, expected: 0 }
    ]
  
    incorrectInputs.forEach(({ input, expected }) => {
      const actualResult = calculateNumbersOfCastlesToBuild(input)
      expect(actualResult).toBe(expected)
    })
  })
  
  test('should return correct outputs', () => {
    const correctInputs = [
      { input: [7], expected: 1 },
      { input: [1,7,3], expected: 2 },
      { input: [3,3,7,3,3], expected: 2 },
      { input: [1,7,7,7,7,7,2], expected: 2 },
      { input: [7,1,7], expected: 2 },
      { input: [8,8,8,2,8,8,8], expected: 2 },
      { input: [3,4,3,4,5,6,2,2,3,9,2,2,3,2,2,3,2], expected: 10 },
      { input: [9,9,9,9], expected: 1 },
    ]
  
    correctInputs.forEach(({ input, expected }) => {
      const actualResult = calculateNumbersOfCastlesToBuild(input)
      console.log("input",input)
      console.log("actualResult",actualResult)
      expect(actualResult).toBe(expected)
    })
  })
})
