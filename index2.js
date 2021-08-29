const a = 1; b = -6; c = 9;  // stands for x**2 - 6*x + 9 = 0
let solutionA = solutionB = 0;
solutionA = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
solutionB = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
console.log(solutionA, solutionB);