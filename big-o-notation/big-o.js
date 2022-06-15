/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 3 * n = O(3n)
    if (!seen[word]) {              // 4 * n = O(4n)
      seen[word] = true;
      unique[unique.length] = word; // 5 * n = O(5n)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 3 * n = O(3n)
    let isUnique = true;            // 3 * n = O(3n)
    for (
      let c = 0;                    // 1 * n = O(n)
      c < i;                        // n * n = O(n^2)
      c++                           // n * n = O(n^2)
    ) {
      const comparing = words[c];   // 2 * n^2 = O(2n^2)
      if (comparing === word) {     // 3 * n^2 = O(3n^2)
        isUnique = false;           // 3 * n^2 = O(3n^2)
      }
    }
    if (isUnique) {                 // 1 * n^2 = O(n^2)
      unique[unique.length] = word; // 1 * n^2 = O(n^2)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
