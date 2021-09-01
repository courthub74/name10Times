//Name 10 times

//One that does your name 10 times
function recursionName(t) {
  if (t === 10) {
    console.log('Court', t); //only gonna do the 10
  } else {
    if (t < 10) {
      console.log('Court', t);
      return recursionName(t + 1);
    }
  }
}

console.log(recursionName(1));
