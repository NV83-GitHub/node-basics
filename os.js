const os = require("os") // OS est un core module de node, pas besoin de le npm install

// Permet de retourner de nombreuses infos utiles sur le système sur lequel le serveur est installé

console.log(os.platform())
console.log(os.homedir(), os.hostname())
