function showInputs() {
    const figura = parseInt(document.getElementById("figura").value);
    const inputsDiv = document.getElementById("inputs");
    inputsDiv.innerHTML = "";

    switch (figura) {
        case 1:  // Cuadrado
            inputsDiv.innerHTML = `
                <label for="ladoCuadrado">Lado del cuadrado:</label>
                <input type="number" class="form-control" id="ladoCuadrado">
            `;
            break;
        case 2:  // Rectángulo
            inputsDiv.innerHTML = `
                <label for="baseRectangulo">Base del rectángulo:</label>
                <input type="number" class="form-control" id="baseRectangulo">
                <label for="alturaRectangulo">Altura del rectángulo:</label>
                <input type="number" class="form-control" id="alturaRectangulo">
            `;
            break;
        case 3:  // Círculo
            inputsDiv.innerHTML = `
                <label for="radioCirculo">Radio del círculo:</label>
                <input type="number" class="form-control" id="radioCirculo">
            `;
            break;
        case 4:  // Triángulo
            inputsDiv.innerHTML = `
                <label for="baseTriangulo">Base del triángulo:</label>
                <input type="number" class="form-control" id="baseTriangulo">
                <label for="alturaTriangulo">Altura del triángulo:</label>
                <input type="number" class="form-control" id="alturaTriangulo">
            `;
            break;
        case 5:  // Cubo
            inputsDiv.innerHTML = `
                <label for="ladoCubo">Lado del cubo:</label>
                <input type="number" class="form-control" id="ladoCubo">
            `;
            break;
        case 6:  // Prisma rectangular
            inputsDiv.innerHTML = `
                <label for="basePrisma">Base del prisma rectangular:</label>
                <input type="number" class="form-control" id="basePrisma">
                <label for="alturaPrisma">Altura del prisma rectangular:</label>
                <input type="number" class="form-control" id="alturaPrisma">
                <label for="profundidadPrisma">Profundidad del prisma rectangular:</label>
                <input type="number" class="form-control" id="profundidadPrisma">
            `;
            break;
        default:
            inputsDiv.innerHTML = "Opción no válida.";
    }
}

function calculateAreaVolume() {
    const figura = parseInt(document.getElementById("figura").value);
    let area, volumen, resultado = "";

    switch (figura) {
        case 1:  // Cuadrado
            const ladoCuadrado = parseFloat(document.getElementById("ladoCuadrado").value);
            area = Math.pow(ladoCuadrado, 2);
            volumen = 0;
            resultado = `El área del cuadrado es: ${area.toFixed(2)}<br>El cuadrado no tiene volumen.`;
            break;
        case 2:  // Rectángulo
            const baseRectangulo = parseFloat(document.getElementById("baseRectangulo").value);
            const alturaRectangulo = parseFloat(document.getElementById("alturaRectangulo").value);
            area = baseRectangulo * alturaRectangulo;
            volumen = 0;
            resultado = `El área del rectángulo es: ${area.toFixed(2)}<br>El rectángulo no tiene volumen.`;
            break;
        case 3:  // Círculo
            const radioCirculo = parseFloat(document.getElementById("radioCirculo").value);
            area = Math.PI * Math.pow(radioCirculo, 2);
            volumen = 0;
            resultado = `El área del círculo es: ${area.toFixed(2)}<br>El círculo no tiene volumen.`;
            break;
        case 4:  // Triángulo
            const baseTriangulo = parseFloat(document.getElementById("baseTriangulo").value);
            const alturaTriangulo = parseFloat(document.getElementById("alturaTriangulo").value);
            area = 0.5 * baseTriangulo * alturaTriangulo;
            volumen = 0;
            resultado = `El área del triángulo es: ${area.toFixed(2)}<br>El triángulo no tiene volumen.`;
            break;
        case 5:  // Cubo
            const ladoCubo = parseFloat(document.getElementById("ladoCubo").value);
            area = 6 * Math.pow(ladoCubo, 2);
            volumen = Math.pow(ladoCubo, 3);
            resultado = `El área del cubo es: ${area.toFixed(2)}<br>El volumen del cubo es: ${volumen.toFixed(2)}`;
            break;
        case 6:  // Prisma rectangular
            const basePrisma = parseFloat(document.getElementById("basePrisma").value);
            const alturaPrisma = parseFloat(document.getElementById("alturaPrisma").value);
            const profundidadPrisma = parseFloat(document.getElementById("profundidadPrisma").value);
            area = 2 * (basePrisma * alturaPrisma + basePrisma * profundidadPrisma + alturaPrisma * profundidadPrisma);
            volumen = basePrisma * alturaPrisma * profundidadPrisma;
            resultado = `El área del prisma rectangular es: ${area.toFixed(2)}<br>El volumen del prisma rectangular es: ${volumen.toFixed(2)}`;
            break;
        default:
            resultado = "Opción no válida.";
    }

    document.getElementById("resultado").innerHTML = resultado;

    const repetir = confirm("¿Desea realizar otro cálculo?");
    if (repetir) {
        showInputs();
        document.getElementById("resultado").innerHTML = "";
    }
}