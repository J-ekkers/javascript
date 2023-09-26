console.log("main.js werkt");

//opdracht 1

let list1 = [4, 5, 8, 12, -1, 99];

console.log("list 1 is", list1);

 

//opdracht 2

let list2 = [0.33, 4.8, 11.1, 34.5, 129.1, -2.56, -17.4]

console.log("list 2 is", list2);

 

//opdracht 3

let list3 = ["rood", "groen", "geel", "blauw", "roze"]

console.log("list 3 is", list3);

 

//opdracht 4

list1[3] = 21;

console.log("list 1 is", list1);

//opdracht 5
list2[0] = 3.3;
list2[6] = -1.74;

console.log("list 2 is", list2);

//opdracht 6
list3[3] = "paars";

console.log("list 3 is", list3);

//opdracht 7
list3.push('zwart')

console.log("list 3 is", list3);

//opdracht 8
list1.unshift(0)

console.log("list 1 is", list1);

//opdracht 9
list2.pop()
list2.shift()
console.log("list 2 is", list2);

//opdracht 10
var items = document.querySelector('items');

function addItemToList() {
  var newItem = prompt("Noem een film");
  if (newItem != null) {
    var ul = document.querySelector('ul');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = newItem;
  }
}

