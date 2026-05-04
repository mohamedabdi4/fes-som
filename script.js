let options = [];

// Marka bogga la furo, hubi haddii qof hore u jiray
window.onload = () => {
    const user = JSON.parse(localStorage.getItem('fesProAccount'));
    if (user) {
        openApp(user.name);
    }
};

function registerUser() {
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const pass = document.getElementById('userPass').value.trim();

    if (!name || !email || !pass) {
        alert("Fadlan buuxi dhamaan meelaha banaan!");
        return;
    }

    // Keydi xogta si joogto ah
    const account = { name, email, pass };
    localStorage.setItem('fesProAccount', JSON.stringify(account));
    
    openApp(name);
}

function openApp(name) {
    document.getElementById('regBox').style.display = 'none';
    document.getElementById('appBox').style.display = 'block';
    document.getElementById('welcomeTitle').textContent = `Soo dhawoow, ${name}!`;
}

function addOption() {
    const input = document.getElementById('optionInput');
    const val = input.value.trim();
    
    if (val) {
        options.push(val);
        const list = document.getElementById('optionList');
        const li = document.createElement('li');
        li.innerHTML = `<span>${val}</span> <span style="color:#ef4444; cursor:pointer" onclick="removeOption(this, '${val}')">X</span>`;
        list.appendChild(li);
        input.value = "";
    }
}

function removeOption(el, val) {
    options = options.filter(o => o !== val);
    el.parentElement.remove();
}

function makeDecision() {
    if (options.length < 2) {
        alert("Fadlan ku dar ugu yaraan 2 ikhtiyaar!");
        return;
    }

    const res = document.getElementById('result');
    res.textContent = "Go'aaminayaa... 🤔";
    
    setTimeout(() => {
        const pick = options[Math.floor(Math.random() * options.length)];
        res.innerHTML = `Go'aanku waa: <br><span style="color:white; font-size:1.8rem">${pick}</span>`;
    }, 1200);
}

function logout() {
    document.getElementById('appBox').style.display = 'none';
    document.getElementById('regBox').style.display = 'block';
}

function resetEverything() {
    if (confirm("Ma hubtaa inaad tirtirto xogta akoonkaaga?")) {
        localStorage.clear();
        location.reload();
    }
}
