
function forLoop(arr) {
  for(let i = 0; i < 25; i++) {
    if(i < 1 || i > 1) {
      arr.push(`I am ${i} strange loops.`)
    } else {
      arr.push(`I am 1 strange loop.`)
    }
  }
  return arr
}

function whileLoop(num) {
  while(num > 0) {
    console.log(--num)
  }
  return "done"
}