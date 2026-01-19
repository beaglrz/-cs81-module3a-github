// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
}

// Greeting based on time of day
function timeGreet(name, hour) {
  if (hour < 12) {
    return "Good morning, " + name + "!";
  } else {
    return "Good evening, " + name + "!";
  }
}

// Add two numbers
function add(a, b) {
  return a + b;
}

// Subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Check if number is positive
function isPositive(num) {
  return num > 0;
}