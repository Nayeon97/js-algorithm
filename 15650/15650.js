// 문제: https://www.acmicpc.net/problem/15650

function isAscending(arr) {
  // 오름차순 확인
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

function printNumList(n, m) {
  const stack = [];
  const path = [];

  function dfs() {
    if (path.length === m) {
      if (isAscending(path)) {
        stack.push([...path]);
      }
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!path.includes(i)) {
        path.push(i);
        dfs();
        path.pop();
      }
    }
  }

  dfs();

  for (const seq of stack) {
    console.log(seq.join(' '));
  }
}

printNumList(4, 2);
