import { test }  from "tape"
import supertest from "supertest"
import { app, mensagemPadrao } from "../app.js"

test('GET /', (teste) => {
    supertest(app)
      .get('/')
      // .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        teste.error(err, 'Sem erros')
        teste.assert(res.text === mensagemPadrao, "API subiu")
        teste.end()  
      })
})

test('POST /Bin2Dec', (teste) => {
    supertest(app)
      .post('/Bin2Dec')
      .send({valor:10})
      // .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        teste.error(err, 'Sem erros')
        teste.assert(res.body === 2, "Converteu bin2Dec")
        teste.end()  
      })
})

test('POST /dec2bin', (teste) => {
  supertest(app)
    .post('/dec2bin')
    .send({valor:2})
    // .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) =>{
      teste.error(err, 'Sem erros')
      teste.assert(res.body === 10, "Converteu dec2bin")
      teste.end()  
    })
})

test('POST /bin2hex', (teste) => {
  supertest(app)
    .post('/bin2hex')
    .send({valor:1111})
    // .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) =>{
      teste.error(err, 'Sem erros')
      teste.assert(res.body === 'F', "Converteu bin2hex")
      teste.end()  
    })
})