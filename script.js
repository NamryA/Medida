function calcular() {
    // Obter os valores dos campos de entrada
    const largura = parseFloat(document.getElementById("largura").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);

    // Verificar se todos os valores foram preenchidos corretamente
    if (isNaN(largura) || isNaN(altura) || isNaN(quantidade)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Calcular a área total em cm²
    const areaPorItem = largura * altura;
    const areaTotalCm2 = areaPorItem * quantidade;

    // Converter para metros quadrados (1 m² = 10.000 cm²)
    const areaTotalM2 = areaTotalCm2 / 10000;

    // Mostrar o resultado com 2 casas decimais
    document.getElementById("resultado").innerHTML = `Área Total: ${areaTotalM2.toFixed(2)} m²`;
}
