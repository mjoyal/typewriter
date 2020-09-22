const sentence = "hello there from lighthouse labs";

const timer = function (char, time, timeEnd) {
  setTimeout(() => {
    process.stdout.write(char); 
    if(time === timeEnd) {
      process.stdout.write('\n'); 
    } 
  }, time) 
}; 

const type = function (sentence) {
  let time = 1000; 
  let timeEnd = 1000 + ((sentence.length - 1) * 50); 
  for(let i = 0; i < sentence.length; i++) {
    timer(sentence[i], time, timeEnd);
    time += 50; 
  }
}; 

type(sentence); 
