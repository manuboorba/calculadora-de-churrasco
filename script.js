

function calcular(event) {
    event.preventDefault();
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);

    const carneHomens = homens * 500;
    const carneMulheres = mulheres * 300;
    const carneCriancas = criancas * 200;
    const carneTotal = carneHomens + carneMulheres + carneCriancas;

    const frangoHomens = homens * 200;
    const frangoMulheres = mulheres * 200;
    const frangoCriancas = criancas * 100;
    const frangoTotal = frangoHomens + frangoMulheres + frangoCriancas;

    const linguicaHomens = homens * 200;
    const linguicaMulheres = mulheres * 200;
    const linguicaCriancas = criancas * 200;
    const linguicaTotal = linguicaHomens + linguicaMulheres + linguicaCriancas;

    const refrigeranteHomens = homens * 300;
    const refrigeranteMulheres = mulheres * 400;
    const refrigeranteCriancas = criancas * 200;
    const refrigeranteTotal = refrigeranteHomens + refrigeranteMulheres + refrigeranteCriancas;

    const cervejaHomens = homens * 800;
    const cervejaMulheres = mulheres * 500;
    const cervejaTotal = cervejaHomens + cervejaMulheres;

    const carneTotalKg = (carneTotal / 1000).toFixed(2);
    const frangoTotalKg = (frangoTotal / 1000).toFixed(2);
    const linguicaTotalKg = (linguicaTotal / 1000).toFixed(2);
    const refrigeranteTotalL = (refrigeranteTotal / 1000).toFixed(2);
    const cervejaTotalL = (cervejaTotal / 1000).toFixed(2);

    document.getElementById('resultado').innerHTML = `
        <p>Carne: ${carneTotalKg}kg</p>
        <p>Frango: ${frangoTotalKg}kg</p>
        <p>Linguiça: ${linguicaTotalKg}kg</p>
        <p>Refrigerante: ${refrigeranteTotalL}l</p>
        <p>Cerveja: ${cervejaTotalL}l</p>
    `;
}
const form = document.getElementById("churrascoForm");
form.addEventListener("submit", calcular);
