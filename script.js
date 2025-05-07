var isDate = function (input) {
  //   write your code here
	// Check if input is a Date object and is valid
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // If input is a string or number, try to parse it into a Date
  if (typeof input === "string" || typeof input === "number") {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate);
  }

  // For all other types, return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
// 