const test = require('tape')
const examples = require('./')

test('buffer', t => {
    t.equal(examples.buffer().type, 'Polygon')
    t.end()
})

test('WKTReader', t => {
    t.assert(examples.WKTReader())
    t.end()
})

test('GeoJSONReader', t => {
    t.assert(examples.GeoJSONReader())
    t.end()
})
