// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

export function getGreatestDiscoveryYear(
  asteroids: { discoveryYear: number }[]
): number {
  const yearCounts = new Map<number, number>();

  for (const asteroid of asteroids) {
    const year = asteroid.discoveryYear;
    yearCounts.set(year, (yearCounts.get(year) || 0) + 1);
  }

  let maxYear = 0;
  let maxCount = 0;

  for (const [year, count] of yearCounts.entries()) {
    if (count > maxCount) {
      maxCount = count;
      maxYear = year;
    }
  }

  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
