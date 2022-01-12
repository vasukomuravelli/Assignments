function runProgram(input) {
  let arr = input.split(" ").map(Number);
  let pre = new Array(arr.length).fill(1);
  let next = new Array(arr.length).fill(1);
  let p = arr[0];
  for (let i = 1; i < arr.length; i++) {
    pre[i] = p;
    p = p * arr[i];
  }
  p = arr[arr.length - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    next[i] = p;
    p = p * arr[i];
  }
  let ans = new Array(arr.length).fill(1);
  for (let i = 0; i < arr.length; i++) {
    ans[i] = pre[i] * next[i];
  }
  console.log(ans);
  //   let prod = 1;
  //   for (let i = 0; i < arr.length; i++) {
  //     prod = prod * arr[i];
  //   }
  //   arr.map((e, i) => {
  //     arr[i] = prod / e;
  //   });
  //   console.log(arr);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`0 2 3 982 10`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
