const request = require('supertest')
const express = require('express')
const app = require('../src/index')

const server = app.listen(4000,() =>{})

afterAll((done) => {
    server.close(done)
})

describe('GET /api/hello', ()=>{

    it('should return a greeting message ', async ()=>{
        const res = await request(server).get('api/hello')
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Hello, World... ha haa..')
    })
})

describe('POST /api/greet', ()=>{
    it('should return a personalized greeting', async ()=>{
        const res = await request(server)
                    .post('/api/greet')
                    .send({name : 'Akhil'})
        
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('hello, Akhil')
    })
})