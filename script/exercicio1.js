function exercicio1() {
    const numero = Number(prompt("Digite um número:"))
const outronumero = Number(prompt("Digite outro Número:"))
alert(numero+outronumero)
}
const buttonExercicio1 = document.getElementById("exercicio1")
buttonExercicio1.addEventListener('click', () => {
    exercicio1()
})