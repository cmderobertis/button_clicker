function increment(el) {
    el.innerText++
}

function log(el) {
    let isLoggedIn = el.innerText != "Login"
    if (isLoggedIn) {
        el.innerText = "Login"
        el.style.backgroundColor = "#05AA6D"
    } else {
        el.innerText = "Logout"
        el.style.backgroundColor = "#A02A2A"
    }
}

function addDef(el) {
    let def = el.value
    if (!def) {
        el.placeholder = "Type in a definition, silly!"
        return
    }
    el.remove()
    document.getElementById('addDef').remove()
    let defBox = document.getElementById('defs')
    let newDef = document.createElement('div')
    defBox.appendChild(newDef)
    newDef.innerHTML = 
        `<div class="row card" id="def2">
            <div class="col stats">
                <h2>ninja</h2>
                <p class="em">noun</p>
                <p class="small">Plural: <em>ninjas</em></p>
                <button onclick="increment(likes2)" class="yellowb bold"><span id="likes2">0</span> likes</button>
            </div>
            <p class="def pad">${def}</p>
        </div>`
}