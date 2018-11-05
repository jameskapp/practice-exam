// use strict;
let user_input = [];


console.log("I WORK")

function test() {
  // console.log(`i've been called with: ${input}`)
  console.log(user_input);
  // const map_arr = user_input.map(x => document.getElementById("only_one").innerHTML = x);
  document.getElementById("result").innerHTML = user_input;
  // document.getElementById("result").innerHTML = user_input.map(x => <option key={x}>{`${x}`}</option>);
  // console.log("map", map_arr);
}

function compute_mod() {
  console.log("this is the mod function");
  //add functionallity from markbook.js. take the pointers below into consideration
}

function compute_average() {
  let sum = 0;
  for(let i=0; i<user_input.length; i++) {
    sum = sum + user_input[i];
    console.log(sum);
  }
  let ave = sum / user_input.length;
  document.getElementById("ave").innerHTML = `Average: ${ave}`;
}

function handleClick(id) {
  let input = document.getElementById(id).value;

  if(input==="exit") {
    console.log("GOOD BYE");
    return;
  }
  else if(input==="average") {
    //call a function which computes the average
    compute_average();
    //if new average wanted then uncomment these next 2 lines
    //sum = 0;
    //count = 0;
  }
  else if(input==="mode") {
    //calls a function which computes the modal value(s)
    compute_mod();

  }
  else if ((Number(input) > 100) || (Number(input) < 0) || isNaN(input) || input === "") {
    document.getElementById(id).value = "";
    // throw new Error("invalid mark");
    alert("Invalid Mark");
  }
  else {
    user_input.push(Number(input));
    document.getElementById(id).value = "";
    document.getElementById("num").innerHTML = `Marks: ${user_input}`;
  }


  // compute_average();
  //instead of just having compute_average() on its own.. look at my markbook.js and then incorporate all the different conditions
  //NB also try to understand my compute_mod() function.. NB
  //remember to take into account that there is no mode if all the numbers appear once, eg: 1,2,3,4 -> no mode
  //BUT there can be more than one mode if the numbers appear more than once, eg: 1,1,2,2,3,3,4,4 -> mode is 1,2,3,4

  console.log(user_input)
}




// test("awe")
