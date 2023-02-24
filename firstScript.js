
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