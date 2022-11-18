const fs = require("fs") // Core module pas besoin de le npm install

// Read file
fs.readFile("./docs/superfichier.txt", (err,data) => {
    if (err){
        console.log(err)
    }
    console.log(data)               // Will return a buffer, essentiellement un packade de donnée , il faut le transformer en string pour pouvoir le lire
    console.log(data.toString())    // toString() permet de lire le contenu texte du fichier
})

// Write file


// Delete file