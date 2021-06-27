import express from 'express'
import bodyParser from 'body-parser'
import { Bin2Dec,Dec2Bin,Bin2Hex } from './convert.js'

export const app = express(), porta = 3000, mensagemPadrao = `Rodando na porta ${porta}!`

app.use(bodyParser.json({ extended: false }))

app.listen(porta, () => console.log(mensagemPadrao))

app.get('/', (req, res) => res.send(mensagemPadrao))

app.post('/bin2dec', (req, res) => {
    if(req.body.valor) res.json(Bin2Dec(req.body.valor))
    else res.status(418).send("Valor para conversão não informado!")
})

app.post('/dec2bin', (req, res) => {
    if(req.body.valor) res.json(Dec2Bin(req.body.valor))
    else res.status(418).send("Valor para conversão não informado!")
})

app.post('/bin2hex', (req, res) => {
    if(req.body.valor) res.json(Bin2Hex(req.body.valor))
    else res.status(418).send("Valor para conversão não informado!")
})