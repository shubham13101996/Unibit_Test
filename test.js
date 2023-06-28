function findCombinations(nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push([nums[i], nums[j]]);
      }
    }
  }

  // Merge and sort the array
  let mergedArray = [].concat(...result).sort((a, b) => a - b);

  // Double the target value
  let doubledTarget = target * 2;

  // Find combinations that sum up to doubled target value
  let secondCombinations = [];
  let n = mergedArray.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        for (let l = k + 1; l < n; l++) {
          if (
            mergedArray[i] +
              mergedArray[j] +
              mergedArray[k] +
              mergedArray[l] ===
            doubledTarget
          ) {
            secondCombinations.push([
              mergedArray[i],
              mergedArray[j],
              mergedArray[k],
              mergedArray[l],
            ]);
          }
        }
      }
    }
  }

  return [result, mergedArray, secondCombinations];
}

// Example usage
let nums = [1, 3, 2, 2, -4, -6, -2, 8];
let target = 4;

let [firstCombinations, mergedArray, secondCombinations] = findCombinations(
  nums,
  target
);
console.log(`First Combination for ${target}:`, firstCombinations);
console.log("Merge Into a single Array:", mergedArray);
console.log(`Second Combination for ${target * 2}:`, secondCombinations);
