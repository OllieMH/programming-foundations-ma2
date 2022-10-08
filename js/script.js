// question 1

var pets = [
    {
      type: "cat",
      age: 5.5,
    },
    {
      type: "dog",
      age: 3.8,
    },
    {
      type: "parrot",
      age: 4.0,
    },
  ];

for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    var age = pet.age;
    var type = pet.type;
    if (age >= 4) {
        console.log(type);
    }
};

// question 2

function checkBool(inputValue){
  if (typeof inputValue === "boolean") {
    console.log(inputValue);
  }
  else {
    console.log("Please pass a boolean value in");
  }
};
checkBool(true);

// question 3

var button = document.querySelector("button");
var h2 = document.querySelector("h2");

button.onclick = function () {
  h2.style.color = "blue";
  h2.innerHTML = "Updated subheading"
};