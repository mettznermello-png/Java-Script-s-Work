function exercicio5() {
    const milhas = Number(prompt("Qual é a distancia em milhas?"))
    const resultado = milhas*1.6934
    alert(resultado + "Km")
}
const buttonExercicio5 = document.getElementById("exercicio5")
buttonExercicio5.addEventListener('click', () => {
    exercicio5()
})