const db = require('../../data/db-config')
const Player = require('./players-model')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run()
})

test('environment is testing', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})


describe('players model', () => {

describe('get function', () => {
    it('gets all players from db', async () => {
        const players = await db('players');
        expect(players).toHaveLength(3)
    })
    it('gets correct player in first position', async () => {
        const players = await db('players');
        expect(players[0].fullname).toBe('Ozzie Albies')
    })
    
})

describe('post function', () => {
    it('insert new player into db', async () => {
        await db('players').insert({ fullname: 'Ronald Acuna Jr', number: 13});
        const players = await db('players')
        expect(players).toHaveLength(4)
        expect(players[3].fullname).toBe('Ronald Acuna Jr')
    })
    it('gets correct number of added player', async () => {
        await db('players').insert({ fullname: 'Ronald Acuna Jr', number: 13});
        const players = await db('players')
        expect(players).toHaveLength(4)
        expect(players[3].number).toBe(13)
    })

})

})