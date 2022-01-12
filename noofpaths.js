function numOfPathsToDest(n) {
  console.log(noofpaths(n, n, 0, 0, 0));
}
function noofpaths(n, n, i, j, ans) {
  if (i == n - 1 && j == n - 1) {
    return ans;
  }
  if (i == 0 || j == 0) {
    return 1;
  }
  while (i <= j) {
    return (
      noofpaths(n, n, i + 1, j, ans + 1) || noofpaths(n, n, i, j + 1, ans + 1)
    );
  }
}
numOfPathsToDest(5);
