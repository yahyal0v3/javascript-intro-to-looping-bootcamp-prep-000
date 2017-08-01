function forLoop(array) {
  array = [];
  if (var i === 1) {
    return array.push("I am 1 strange loop.")
  } else {
    for (let i = 0; i < 25; i++) {
      return array.push("I am ${i} strange loops.")
    }
  }
}


function whileLoop(a) {
  if (a === 0) {
    return "done"
  } else {
    while(a > 0) {
      console.log(--countdown)
    }
  }
}


function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {array.pop()
  } while (array.length > 0 && maybeTrue());
}
