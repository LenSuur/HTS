var getPixels = require("get-pixels");
var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
var morsecode =[
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
    '--..',
    '.----',
    '..---',
    '...--',
    '....-',
    '.....',
    '-....',
    '--...',
    '---..',
    '----.',
    '-----',
  ];

getPixels("ASCII_djd.png", function(err, pixels) {
  if(err) {
    console.log("Bad image path");
    return;
  }
  let pixelArray = [];
  for(let i = 0; i<pixels.data.length; i+=4){
    let pixel = pixels.data.slice(i,i+4);
    pixelArray.push(pixel);
  }
  let split = pixelArray.map(p => p[0] == 0 ? 0 : 1).join('').split('1');
  let nums = split.map(s => s.length +1); 
  nums.pop();
  console.log(nums);
  let morse = nums.map(num => String.fromCharCode(num)).join('');
  let answer = morse.split(' ').map(m=>{
    let index = morsecode.findIndex(e => e == m);
    return abc[index];
  })
  
  console.log(answer.slice(0,-1).join('').toLowerCase());
    
    
    
    
    
});

