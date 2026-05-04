let options = [];

function addOption() {
    const input = document.getElementById('optionInput');
    const val = input.value.trim();
    
    if (val !== "") {
        options.push(val);
        const list = document.getElementById('optionList');
        const li = document.createElement('li');
        li.textContent = val;
        list.appendChild(li);
        input.value = "";
    }
}

function makeDecision() {
    if (options.length < 2) {
        alert("Fadlan ku dar ugu yaraan labo ikhtiyaar!");
        return;
    }
    
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = "Loading...";
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * options.length);
        const choice = options[randomIndex];
        resultDiv.textContent = "Go'aanku waa: " + choice;
    }, 500);
}
