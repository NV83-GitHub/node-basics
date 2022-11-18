// Global est l'équivalent du window object du browser , il contient des propriétés et des méthode accessible globalement dans node
// On ne peut pas manipuler les dom via l'objet document puisqu'il fait lui meme partie de l'object window du browser, mais ce n'est pas grave car node ne manipule pas le dom, il est axé backend

//console.log(global) // pour consulter son contenu dans la console, on noteras notament setTimeout(), setInterval() et clear interval

let count = 4

// Execute une fonction au bout du temps demandé en millisecondes
setTimeout(() => {
    console.log("Time is out")
    clearInterval(int) // this one est pour arreter un setInterval(dans ce cas ci const int juste en dessous dans le code)
}, 3500) 


// Execute des commandes toute les x millisecondes
const int = setInterval(() => {
    count--
    console.log(count)
},1000)

console.log(__dirname) // Indique le path du dossier dans lequels se trouve le fichier courant
console.log(__filename) // Indique le path complet du fichier
