//https://www.acmicpc.net/problem/2309

// 완전 탐색 -> 무조건 하나하나 다 찾는다..
// 즉 다 제외해보면서 찾는다인듯..?
// 뭘 제외? 2명 제외

function findSevenDwarfs() {
  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      let remaining = [];
      for (let k = 0; k < heights.length; k++) {
        if (k !== i && k !== j) {
          remaining.push(heights[k]);
        }
      }

      let sum = 0;
      for (let l = 0; l < remaining.length; l++) {
        sum += remaining[l];
      }

      if (sum === 100) {
        remaining.sort((a, b) => a - b);
        for (let height of remaining) {
          console.log(height);
        }
        return;
      }
    }
  }
}

const heights = [20, 7, 23, 19, 10, 15, 25, 8, 13];

findSevenDwarfs(heights);
