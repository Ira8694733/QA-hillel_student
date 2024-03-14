// 'number33' - + operator in string concatenation joins strings
// 3 - + operator in this case coerces null to a number, which equals 0
// "qwerty" - because both operands are not false, so the result of the expression is the last && value
// `42hillel` - +'40' and +'2' coerce the strings to numbers 40 and 2 respectively, then they are added.
// Then the result is concatenated with the string "hillel".
// false - strict comparison
//1 - true = 1, false = 0
//NaN - because the string '4px' cannot be converted to a number
// 1 - because both operands are coerced to numbers and subtraction is performed
// 61 - 3 ** 0 = 1 => '6' + 1.
// 2 - string '6' is converted to the number 6
// 10false - false because 5 doesn't = 6
// false - null is not equal to the empty string
//27 -  9 / 3 = 3, and 3 ** 3 = 27.
// true - because both 'false' and 'true' are coerced to boolean values true, so true == true
// 1 - because 0 || '0' yields '0', and '0' && 1 yields 1, so the last value becomes the result
// false - +null equals 0, which is equal to false, and 0 < 1 is true.
// true - because false && true yields false, but false || true yields true.
// false - false || true yields true, but false && true yields false
// false - 1 ** 5 = 1, and the comparison 0 == false yields true, and true < 1 also yields true.

