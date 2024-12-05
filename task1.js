function calculateCircleArea(radius) {
  if (radius <= 0) {
    console.log("Please write valid number...");
  }

  const circleArea = Math.PI * Math.pow(radius, 2);
  console.log(
    `The area of a circle with radius ${radius} is: ${circleArea.toFixed(2)}`
  );
}

// For terminal taking as argv
const radius = parseFloat(process.argv[2]);

// Calling function
calculateCircleArea(radius);
