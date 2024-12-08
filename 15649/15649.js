// 문제: https://www.acmicpc.net/problem/15649
function printNumList(n, m) {
  const stack = [];
  const path = [];

  function dfs() {
    if (path.length === m) {
      stack.push([...path]);
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!path.includes(i)) {
        path.push(i);
        console.log(path, '푸시하고 나서 path');
        dfs();
        path.pop();
        console.log(path, 'pop 호출 후 path');
      }
    }
  }

  dfs();

  for (const seq of stack) {
    console.log(seq.join(' '));
  }
}

printNumList(4, 2);
