# Uncommon JavaScript Null Check Bug

This repository demonstrates a subtle bug in JavaScript related to null checks. The bug involves an incorrect return value when a variable is null.

## Bug Description

The `foo` function is supposed to return 1 if `x` is null and another value if it is not null.  However, it contains a logic error that causes it to return 0 in the null case.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code. Observe the incorrect output when calling `foo` with a null argument.

## Solution

The solution is provided in `bugSolution.js`.  The fix involves correcting the return statement to return 1 when x is null. 

## Additional Notes
This example highlights the importance of careful attention to detail when writing conditional statements, especially when dealing with null and undefined values in JavaScript.