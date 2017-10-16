import extend from 'jsts/extend'
import Geometry from 'jsts/org/locationtech/jts/geom/Geometry'
import WKTReader from 'jsts/org/locationtech/jts/io/WKTReader'
import {BufferOp} from 'jsts/org/locationtech/jts/operation/buffer'

extend(Geometry.prototype, {
    buffer: function () {
        return BufferOp.bufferOp(this, ...arguments);
    }
})

export default () => {
    const reader = new WKTReader()
    let a = reader.read('POINT (-20 0)')
    let b = reader.read('POINT (20 0)')
    a = a.buffer(40)
    b = b.buffer(40)
    return a
}
