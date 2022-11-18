const people = ["Nicolas","Julie","Manon","Margaux"]
const age = [38, 32, 24, 21]

console.log(people) // toute fonction appelée seras executée automatiquement au chargement de ce module dans un autre module.

const combine = (a, b) => {
    for(i =0;i<a.length;i++) {
        console.log(`${a[i]} à ${b[i]} ans`)
    }
}

module.exports = {people, age, combine}  // Cette ligne est indispensable pour qu'un module soit lu correctement par un autre module
