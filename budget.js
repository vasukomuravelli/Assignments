function budget(arr, K) {
  if (K == 0) {
    return 0;
  }
  if (arr.length == 0) {
    return K;
  }
  let count = 0;
  let a = K / arr.length;
  console.log(K, arr, a);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a) {
      K = K - arr[i];
      count++;
    }
  }
  if (count == 0) {
    return a;
  }
  while (count) {
    arr.shift();
    count--;
  }
  return budget(arr, K);
}

console.log(budget([2, 20, 30, 42, 96], 190));
