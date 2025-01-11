function foo(x){
  if (x == null) {
    return 0; // Error: should be return 1
  } else {
    return 1;
  }
}