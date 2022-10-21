const cells = document.querySelectorAll('.cell')
const chris = document.querySelector('.chrisRock')
const score = document.querySelector('#score')
const timeLeft = document.querySelector('#timeLeft')

let position;
let scoreValue = 0

cells.forEach(cell=>{
    cell.addEventListener('mousedown',()=>{

      if(  cell.id == position){
          scoreValue++
          score.innerHTML = scoreValue
          position = null
      }
    })
})



function randomlySpawnChris(){
//enlever toutes les classes chrisRock => plus de chris nulle part
    cells.forEach(cell=>{cell.classList.remove('chrisRock')})
//une cellule au hasard recoit la classe chrisRock
    let randomCell = cells[Math.floor(Math.random()*9)]
    randomCell.classList.add('chrisRock')

    position = randomCell.id

    //on a l'id de la cellule en train d'afficher
    // chris stockée dans la variable position

    //on peut surveiller le clic sur chaque cellule

    //sur le clic d'une cellule, l'ID de cette derniere doit etre égal
    //à la variable position
    //si c'est le cas, on ajoute un point au score



}
randomlySpawnChris()

setInterval(randomlySpawnChris,1000)


// definir un chiffre au hasard entre 0 et 8 (inclus)
//Math.floor(Math.random()*9)
// cells[1].classList.add('chrisRock')


