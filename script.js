// 1. X% of Y
function calcPercentage() {
  let percent = document.getElementById("percent").value;
  let number = document.getElementById("number").value;

  let result = (percent / 100) * number;
  document.getElementById("result1").innerText = "Result: " + result;
}

// 2. What % X is of Y
function calcPercentOf() {
  let x = document.getElementById("value1").value;
  let y = document.getElementById("value2").value;

  let result = (x / y) * 100;
  document.getElementById("result2").innerText = "Result: " + result + "%";
}

// 3. Increase
function increaseValue() {
  let base = document.getElementById("base").value;
  let change = document.getElementById("change").value;

  let result = base * (1 + change / 100);
  document.getElementById("result3").innerText = "Increased Value: " + result;
}

// 4. Decrease
function decreaseValue() {
  let base = document.getElementById("base").value;
  let change = document.getElementById("change").value;

  let result = base * (1 - change / 100);
  document.getElementById("result3").innerText = "Decreased Value: " + result;
}