// use strict;
let user_input = [];

console.log("I WORK")

function test() {
  // console.log(`i've been called with: ${input}`)
  console.log(user_input);
  const map_arr = user_input.map(x => document.getElementById("only_one").innerHTML = x);
  document.getElementById("result").innerHTML = map_arr;
  // document.getElementById("result").innerHTML = user_input.map(x => <option key={x}>{`${x}`}</option>);
  console.log("map", map_arr);
}

function test_change(input) {
  user_input.push(input);
}




// test("awe")
