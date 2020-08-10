// Chapter 2 - Eloquent JS Exercises

for(let i = 0; i < 7; i++) {
  let str = '';
  for(let j = 0; j < i + 1; j++) {
    str += '#'
  }
  console.log(str);
}

for(let i = 0 ; i < 100; i++) {
  if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0){
    console.log('FizzBuzz');
  } else {
    if((i + 1) % 3 === 0) {
    console.log('Fizz');
  } else if ((i + 1) % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i + 1);
  }
  }
}  

let size = Number(prompt('Enter a number equal to size of chessboard'));

for(let i = 0; i < size; i++){
  let str = '';
  for(let j = 0 ; j < size; j++) {
    if((i + 1) % 2 === 0) {
      // console.log('Even row')
      if((j + 1) % 2 === 0) {
        str += ' ';
      } else {
        str += '#';
      }
    } 
    else if((i + 1) % 2 !== 0) {
      // console.log('Odd row');
      if((j + 1) % 2 !== 0) {
        str += ' ';
      } else {
        str += '#';
      }
    }
  }
  console.log(str);
}
