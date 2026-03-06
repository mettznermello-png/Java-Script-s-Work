function exercio2() {
    
const peso1 = Number(prompt("Qual é o peso da pessoa 1:"))
const peso2 = Number(prompt("Qual é o peso da pessoa 2:"))
const peso3 = Number(prompt("Qual é o peso da pessoa 3:"))
const peso4 = Number(prompt("Qual é o peso da pessoa 4:"))
const peso5 = Number(prompt("Qual é o peso da pessoa 5:"))
const resultado = (peso1+peso2+peso3+peso4+peso5)/5
alert(`A média dos pesos informados é ${resultado}`)
}
const buttonExercicio3 = document.getElementById("exercicio3")
buttonExercicio3.addEventListener('click', () => {
    exercicio3()
})