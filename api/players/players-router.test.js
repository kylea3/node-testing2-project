const db = require('../../data/db-config')
const request = require('supertest')
const server = require('../server')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db.seed.run()
})

describe('[GET] /api/players', () => {
    test('responds with 200 OK', async () => {
        const res = await request(server).get('/api/players')
        expect(res.status).toBe(200)
    })
    test('responds correct number of players', async () => {
        const res = await request(server).get('/api/players')
        expect(res.body).toHaveLength(3)
    })
    test('responds correct player in first position', async () => {
        const res = await request(server).get('/api/players')
        expect(res.body[0].fullname).toBe('Ozzie Albies')
    })
})

describe('[POST] /api/players', () => {
    test('responds with 201', async () => {
        const res = await request(server).post('/api/players').send({ fullname: 'Ronald Acuna Jr', number: 13})
        expect(res.status).toBe(201)
    })
    test('adds player to db', async () => {
        const res = await request(server).post('/api/players').send({ fullname: 'Ronald Acuna Jr', number: 13})
        expect(res.body).toHaveLength(4)
    })
    test('responds with new player name in database', async () => {
        const res = await request(server).post('/api/players').send({ fullname: 'Ronald Acuna Jr', number: 13})
        expect(res.body[3].fullname).toBe('Ronald Acuna Jr')
    })
    test('responds with new player number in database', async () => {
        const res = await request(server).post('/api/players').send({ fullname: 'Ronald Acuna Jr', number: 13})
        expect(res.body[3].number).toBe(13)
    })
})