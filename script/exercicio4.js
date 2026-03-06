function exercicio4() {
    const temperatura = Number(prompt("Qual é a temperatura ambiente?"))
    const resultado = (9*temperatura+160)/5
    alert(`A temperatura ambiente em fahrenheit é ${resultado}`)
}
const buttonExercicio4 = document.getAnimations("execicio4")
buttonExercicio4.addEventListener('click', () => {
    exercicio4()
})