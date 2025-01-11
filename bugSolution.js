function foo(x) {
  if (x == null) {
    return 1; // Corrected: should be return 1
  } else {
    return 0;
  }
}