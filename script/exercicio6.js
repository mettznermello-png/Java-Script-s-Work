function exercicio6() {
    
const tempo = Number(prompt("Por quanto tempo você esquenta seu café?"))
const resultado1 = tempo/3600
const resultado2 = tempo/60
const resultado3 = tempo
alert(resultado1 + "h")
alert(resultado2 + "m")
alert(resultado3 + "s")
}
const buttonExercicio6 = document.getElementById("exercicio6")
buttonExercicio6.addEventListener('click', () => {
    exercicio6()
})