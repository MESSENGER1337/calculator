function addToDisplay(value) {
    const currentCalculation = document.getElementById("current-calculation");
    const result = document.getElementById("result");

    if (currentCalculation.innerText === "0") {
        currentCalculation.innerText = value;
    } else {
        currentCalculation.innerText += value;
    }

    result.innerText = currentCalculation.innerText;
}

function clearDisplay() {
    document.getElementById("current-calculation").innerText = "0";
    document.getElementById("result").innerText = "0";
}

function backspace() {
    const currentCalculation = document.getElementById("current-calculation");

    if (currentCalculation.innerText.length > 1) {
        currentCalculation.innerText = currentCalculation.innerText.slice(0, -1);
    } else {
        currentCalculation.innerText = "0";
    }

    document.getElementById("result").innerText = currentCalculation.innerText;
}

function calculate() {
    const currentCalculation = document.getElementById("current-calculation");
    let calculation = currentCalculation.innerText.replace("x", "*").replace("/", "/");
    
    try {
        const result = eval(calculation);
        currentCalculation.innerText = result;
        document.getElementById("result").innerText = result;
    } catch (e) {
        document.getElementById("result").innerText = "Error";
    }
}
