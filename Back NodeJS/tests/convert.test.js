import { test }  from "tape"
import { Bin2Dec,Dec2Bin,Bin2Hex } from '../convert.js'

test('Converter binario para decimal', (teste) => {
    teste.assert(Bin2Dec(10) === 2, "OK")
    teste.end()  
})

test('Converter decimal para binario', (teste) => {
    teste.assert(Dec2Bin(2) === 10, "OK")
    teste.end()  
})

test('Converter binario para hexadecimal', (teste) => {
    teste.assert(Bin2Hex(1111) === 'F', "OK")
    teste.end()  
})