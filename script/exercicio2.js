function exercicio2() {
    const valorHora = Number(prompt("Digite o valor por hora:"))
    const horasTrabalhadas = Number(prompt("Digite suas horas Trabalhadas:")) 
    const resultado = valorHora*horasTrabalhadas
    alert("seus salário é:" + resultado)
}
const buttonExercicio2 = document.getElementById("exercicio2")
buttonExercicio2.addEventListener('click', () => {
    exercicio2()
}) 
// addEventListener