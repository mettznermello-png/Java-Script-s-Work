function exercicio7() {
    const distância = Number(prompt("Qual é a distancia em Km?"))
const resultado1 = distância*1000
const resultado2 = distância*100000
alert(resultado1 + "m")
alert(resultado2 + "cm")
}
const buttonExercicio7 = document.getElementById("exercicios7")
buttonExercicio7.addEventListener('click', () => {
    exercicio7()
})