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
        expect(players[0].fullname).toBe('Ozzie Albies')
    })
    it('gets correct player in first position', async () => {
        const players = await db('players');
        expect(players[0].fullname).toBe('Ozzie Albies')
    })
    
})

})