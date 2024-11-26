

function calcular(event) {
    event.preventDefault();
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);


    const carne = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cerveja = (homens * 800) + (mulheres * 500);

    const carneKg = (carne / 1000).toFixed(2);
    const frangoKg = (frango / 1000).toFixed(2);
    const linguicaKg = (linguica / 1000).toFixed(2);
    const refrigeranteL = (refrigerante / 1000).toFixed(2);
    const cervejaL = (cerveja / 1000).toFixed(2);

    document.getElementById('resultado').innerHTML = `
        <p>Carne: ${carneKg}kg</p>
        <p>Frango: ${frangoKg}kg</p>
        <p>Linguiça: ${linguicaKg}kg</p>
        <p>Refrigerante: ${refrigeranteL}l</p>
        <p>Cerveja: ${cervejaL}l</p>
    `;
}
const form = document.getElementById("churrascoForm");
form.addEventListener("submit", calcular);
