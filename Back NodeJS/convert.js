export function Bin2Dec(valor){ return parseInt(valor,2)}
export function Dec2Bin(valor){
    let binario = 0, restante, i = 1, etapa = 1
    while (valor != 0) {
        restante = valor % 2
        valor    = parseInt(valor / 2)
        binario  = binario + restante * i
        i        = i * 10
    }
    return binario
}
export function Bin2Hex(valor){ return parseInt(valor, 2).toString(16).toUpperCase()}