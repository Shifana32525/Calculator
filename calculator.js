let screen = document.getElementById('calc-screen');

function addValue(value) {
    screen.value = screen.value + value;
}

function clearScreen() {
    screen.value = '';
}

function deleteChar() {
    let currentText = screen.value;
    screen.value = currentText.slice(0, -1);
}

function calculate() {
    try {
        if (screen.value !== '') {
            let finalAnswer = eval(screen.value);
            
            // Check for division by zero
            if (finalAnswer === Infinity || finalAnswer === -Infinity) {
                screen.value = 'undefined';
            } else {
                screen.value = finalAnswer;
            }
        }
    } catch (error) {
        screen.value = 'Error';
    }
}
