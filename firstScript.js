
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