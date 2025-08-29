let nomes = []

function adicionarAmigo() {
    const input = document.getElementById("amigo")
    const nome = input.value.trim()

    if (!nome) {
        alert("Por favor, insira um nome.")
        return
    }

    if (nomes.includes(nome)) {
        alert("Esse nome já foi adicionado!")
        input.value = ""
        return
    }

    nomes.push(nome)
    input.value = ""
    atualizarLista()
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""

    nomes.forEach(n => {
        const li = document.createElement("li")
        li.textContent = n
        lista.appendChild(li)
    })
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos 2 pessoas para o sorteio.")
        return
    }

    const sorteio = embaralhar([...nomes])
    const resultado = document.getElementById("resultado")
    resultado.innerHTML = ""

    for (let i = 0; i < sorteio.length; i++) {
        const presenteador = sorteio[i]
        const presenteado = sorteio[(i + 1) % sorteio.length]
        const li = document.createElement("li")
        li.textContent = `${presenteador} ➝ ${presenteado}`
        resultado.appendChild(li)
    }
}