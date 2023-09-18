const server = require('../src/app');
const session = require('supertest');
const agent = session(server);

describe("Test de RUTAS", () => {
    describe( 'GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            let response = (await agent.get('/rickandmorty/character/1')).text;
            response = JSON.parse(response);
            expect(response).toHaveProperty('id')
            expect(response).toHaveProperty('name')
            expect(response).toHaveProperty('species')
            expect(response).toHaveProperty('gender')
            expect(response).toHaveProperty('status')
            expect(response).toHaveProperty('origin')
            expect(response).toHaveProperty('image')
        })
        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/9999').expect(500);
        })
    })
    describe("GET /rickandmorty/login", () => {
        it("{access: true} credenciales correctas", async () => {
            const {body} = await agent.get('/rickandmorty/login?email=m@m.com&password=marcos1')
            // console.log(body)
            expect(body.access).toBe(true)
        })
        it("{access: false} credenciales incorrectas", async () => {
            const {body} = await agent.get('/rickandmorty/login?email=m@m.c&password=marcos231')
            // console.log(body)
            expect(body.access).toBe(false)
        })
    })
    describe("POST /rickandmorty/fav", () => {
        const character1 = {id: '1', name: 'Rick'};
        const character2 = {id: '2', name: 'Marcos'};
        it('Personaje enviado por body', async () => {
            const response = (await agent.post('/rickandmorty/fav').send(character1)).body;
            expect(response).toContainEqual(character1)
        })
        it('Devolves personajes previos y el actual', async () => {
            const response = (await agent.post('/rickandmorty/fav').send(character2)).body;
            expect(response).toContainEqual(character1)
            expect(response).toContainEqual(character2)
        })
    })
    describe("DELETE /rickandmorty/fav/:id", () => {
        const character1 = {id: '1', name: 'Rick'};
        const character2 = {id: '2', name: 'Marcos'};
        it('Devuelve arreglo completo si no se eliminan personajes', async () => {
            const response = (await agent.delete('/rickandmorty/fav/50')).body;
            expect(response).toContainEqual(character1)
            expect(response).toContainEqual(character2)
        })
        it('Elimina correctamente al personaje', async () => {
            const response = (await agent.delete('/rickandmorty/fav/2')).body;
            expect(response).not.toContainEqual(character2);
        })
    })
})