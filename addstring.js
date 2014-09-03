/**
 * Adds extremely large numbers together (larger than 64bit floating point).
 * Can only accept integers (no decimals or commas), must be in form of a string.
 * Can accept infinite amount of arguments.
 **/
function string_add() {
  var sumString = '';

  for (var i = 0; i < arguments.length; i++) {
    var numString = arguments[i];
    var numStrLength = numString.length;
    var numberArray = [];
    var sumArray = [];

    // Save the current sum, sumArray is what will be used to add into numArray.
    for (var h = 1; h <= sumString.length; h++) {
      sumArray.push(sumString.charAt(sumString.length - h));
    }
    sumString = '';
    // Deleted so it can be updated later.
    // Must be deleted after it's copied, and before you make a new sum.

    // Add each character into an array starting first digit, Example: in "12", the first digit is 2.
    for (var h = 1; h <= numStrLength; h++) {
      numberArray.push(numString.charAt(numStrLength - h));
    }

    // I now have the number into the array.  I can add it to the base value.
    // I have two arrays numArray and valArray.
    // Loop through numarray and add its values to numarray into a string.
    var carryOver = 0;
    for (var j = 0; j < numberArray.length; j++) {
      if (typeof (sumArray[j]) == 'undefined') {
        sumArray[j] = '0';  // Setting the value to zero so it can add.
      }
      var numberSum = parseInt(numberArray[j]) + parseInt(sumArray[j]) + carryOver;
      if (numberSum >= 10) {
        numberSum = numberSum - 10;
        carryOver = 1;
      } else {
        carryOver = 0;
      }
      sumString = numberSum.toString() + sumString;
    }
    if (carryOver) {
      sumString = "1" + sumString;
    }
  }
  return sumString;
}

// For testing.
var a = '12345';
var b = '67890';
var c = '50000';
var d = '1111111111111111111111111'
var result = string_add(a, b);
var result2 = string_add(a, b, c);
var result3 = '1111111111111111111123456'
alert(result === "80235" ? "You're right!" : "Keep at it");
alert(result2 === "130235" ? "You're right!" : "Keep at it ");
alert(result3 === "1111111111111111111123456" ? "You're right!" : "Keep at it ");
