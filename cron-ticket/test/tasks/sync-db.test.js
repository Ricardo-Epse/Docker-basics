const { syncDb } = require("../../tasks/sync-db")


describe('Pruebas en Sync-db',() => {


    test('Debe ejecutar el proceso 2 veces', () => {

        syncDb();
        const times = syncDb();
        console.log('se llamo', times)

        expect( times ).toBe(2)
    })
})