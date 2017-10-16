const test = require('tape')
const examples = require('./')

test('buffer', t => {
    t.assert(examples.buffer())
    t.end()
})

test('WKTReader', t => {
    t.assert(examples.WKTReader())
    t.end()
})
