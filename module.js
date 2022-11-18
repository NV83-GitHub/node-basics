const peoples = require("./peoples") // Comme c'est un objet on pourrait le destructurer pour importer que ce dont on a besoin, en utilisant la syntaxe {people,age,combine}

console.log(peoples)// Returns an empty object if the module.export section of the required module is not set properly

peoples.combine(peoples.people,peoples.age)