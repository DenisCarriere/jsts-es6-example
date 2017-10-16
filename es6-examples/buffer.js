import extend from 'jsts/extend'
import {point} from '@turf/helpers'
import Geometry from 'jsts/org/locationtech/jts/geom/Geometry'
import GeoJSONReader from 'jsts/org/locationtech/jts/io/GeoJSONReader'
import GeoJSONWriter from 'jsts/org/locationtech/jts/io/GeoJSONWriter'
import {BufferOp} from 'jsts/org/locationtech/jts/operation/buffer'

extend(Geometry.prototype, {
    buffer: function () {
        return BufferOp.bufferOp(this, ...arguments)
    }
})

export default () => {
    const reader = new GeoJSONReader()
    const writer = new GeoJSONWriter()
    const pt = reader.read(point([-20, 0]).geometry)
    const buffered = pt.buffer(40)
    return writer.write(buffered)
}
