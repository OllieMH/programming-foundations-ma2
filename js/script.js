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
