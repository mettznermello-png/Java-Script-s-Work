const nota1 = Number(prompt("digite sua primeira nota:"))
const nota2 = Number(prompt("digite sua segunda nota:"))
const nota3 = Number(prompt("digite sua terceira nota:"))

const media = (nota1+nota2+nota3)/3
//console.log(media)
//console está no f12 na aba console
if (media < 3 ) {
    alert("Melhore (é sério)")
} else if ( media >= 3 && media <= 7 ) {
    alert("Dá pra melhorar")
} else if (media > 7 && media <= 10) {
    alert("Exelente, merece uma balinha")
} else {
    alert("Essa nota não existe")
}