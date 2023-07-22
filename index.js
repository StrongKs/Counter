let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr;
    if (saveEl.innerHTML == "Previous entries: ") {
        countStr = count
    } else {
        countStr = " - " + count
    }
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    count = 0
    countEl.textContent = count
    saveEl.textContent = "Previous entries: "
}