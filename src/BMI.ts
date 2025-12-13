/**
 * Calculate BMI
 * - Accepts weight in KG as a parameter (type number)
 * - Accepts height in CM as a parameter (type number)
 * - returns the calculated BMI (type number)
 * - The equation for BMI is (weight (kg) / height^2(m)).
 */
function calculateBMI(weight: number, height: number): number {
  // Write your code here 👇🏼
  const heightInMeters = height / 100;
  const BMI = weight / (heightInMeters * heightInMeters);

  console.log(`${weight} / (${heightInMeters} * ${heightInMeters})`)
  return BMI;
  // Stop making changes here!
  
}

/**
 * Get BMI State
 * - Accepts BMI as a parameter (type number)
 * - returns a BMIStatus type indicating the BMI category (type BMIStatus)
 */

// Don't change this type
type BMIStatus = "underweight" | "healthy" | "overweight" | "obese";

function getBMIState(BMI: number): BMIStatus {
  // Don't change this variable
  let BMIState: BMIStatus = "obese";
  // Write your code here 👇🏼
if (BMI < 18.5) {
  BMIState = "underweight";
} else if (BMI < 25) {
  BMIState = "healthy";
} else if (BMI < 30) {
  BMIState = "overweight";
} else {
  BMIState = "obese";
}
return BMIState;
}
  // Stop making changes here!
  

/**
 * Get BMI State by Age
 * - Accepts BMI as a parameter (type number)
 * - Accepts age as a parameter (type number)
 * - returns a HealthStatus type indicating the BMI state (type HealthStatus)
 */

// Don't change this type
type HealthStatus = "not healthy" | "healthy";

function getBMIStateByAge(BMI: number, age: number): HealthStatus {
  // Don't change this variable
  let BMIState: HealthStatus = "not healthy";
  // Write your code here 👇🏼
let minBMI: number;
let maxBMI: number;

if (age >= 19 && age <= 24) {
  minBMI = 19; maxBMI = 24;
} else if (age >= 25 && age <= 34) {
  minBMI = 20; maxBMI = 25;
} else if (age >= 35 && age <= 44) {
  minBMI = 21; maxBMI = 26;
} else if (age >= 45 && age <= 54) {
  minBMI = 22; maxBMI = 27;
} else if (age >= 55 && age <= 64) {
  minBMI = 23; maxBMI = 28;
} else {
  minBMI = 24; maxBMI = 29;
}
if (BMI > minBMI && BMI < maxBMI) {
  BMIState = "healthy"
}
  // Stop making changes here!
  return BMIState;
}

export { calculateBMI, getBMIState, getBMIStateByAge };
