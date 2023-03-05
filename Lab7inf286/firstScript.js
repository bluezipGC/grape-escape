const http = createRequire(';http')
const { createRequire } = require('module');

var list = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = list[0];

for (var i = 0; i < list.length; i++) {
    if (largest < list[i] ) {
        largest = list[i];
    }
}


function alertOnButton(largest) {
    alert(largest);
}

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.weather.gov/points/39.7456,-97.0892");
xhr.send()
xhr.onload = function() {
    coolButton(`Loaded: ${xhr.status} ${xhr.response}`);
  };

  function coolButton() {
    alert(`Loaded: ${xhr.status} ${xhr.response}`);
  }


  function checkPalindrome(str) {  
    // get the total length of the words  
    const len = str.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
        // validate the first and last characters are the same  
        if (str[i] !== str[len - 1 - i]) {  
          alert( 'It is not palindrome'); 
          return;
        }  
    }  
  // If they are not the same, then it is not a palindrome
    alert( 'It is a palindrome');  
}  
  
// take input of the string or number from the prompt  
const string = prompt('Enter a string or number to check for Palindrome: ');  
  
const value = checkPalindrome(string);  

// log it's value in the console
console.log(value);  


const fs = require('fs');

function readFileAsync(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}


 function listFilesInDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.log('Unable to scan directory: ' + err);
      return;
    } 
    files.forEach((file) => {
      console.log(file);
    });
  });
}  


readFileAsync('/Users/admin/Documents/GitHub/grape-escape/index.html', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
}); 

alert(null, data)

