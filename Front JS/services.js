const url = 'http://localhost:3000' // Link da API

export async function testaConexao() {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)

    xhr.addEventListener("load", function () { // Bate na API
        if (xhr.status == 200) return true // Se retornar sucesso
        else return false
    })
    xhr.send()
}

export function bin2Dec(valor) {
    let data = new FormData()
    let xhr  = new XMLHttpRequest()

    data.append('valor', valor)
    xhr.open("POST", `${url}/bin2dec`,true)

    xhr.addEventListener("load", function(res) {
        if (xhr.status == 200) return res // Se retornar sucesso
        else alert('Indisponível')
    })
    xhr.addEventListener("error", (res) => res)

    xhr.send(data)
}

export function dec2bin(valor) {
    let data = new FormData()
    let xhr  = new XMLHttpRequest()

    data.append('valor', valor)
    xhr.open("POST", `${url}/dec2bin`,true)

    xhr.addEventListener("load", function(res) {
        if (xhr.status == 200) return res // Se retornar sucesso
        else alert('Indisponível')
    })
    xhr.addEventListener("error", (res) => res)

    xhr.send(data)
}

export function bin2hex(valor) {
    let data = new FormData()
    let xhr  = new XMLHttpRequest()

    data.append('valor', valor)
    xhr.open("POST", `${url}/bin2hex`,true)

    xhr.addEventListener("load", function(res) {
        if (xhr.status == 200) return res // Se retornar sucesso
        else alert('Indisponível')
    })
    xhr.addEventListener("error", (res) => res)

    xhr.send(data)
}