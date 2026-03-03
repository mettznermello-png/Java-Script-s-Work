const footer = document.getElementById("footer")
//footer.style.color = "blue"

const novoTitulo = document.createElement("h2")
novoTitulo.textContent = "Um Novo Titulo"
//console.log(novoTitulo)

footer.appendChild(novoTitulo)
// getElementById = puxa um elemento do HTML

const header = document.getElementById("exemplo")
header.appendChild(novoTitulo)


//const button = document.getElementById('my-button');
//button.addEventListener('click', () => {
//    alert('button was clicked');
//});
header.addEventListener("click", () => {
    alert("it's going down now, just let's us adore you")
})