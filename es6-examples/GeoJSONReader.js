import {point} from '@turf/helpers'
import GeoJSONReader from 'jsts/org/locationtech/jts/io/GeoJSONReader'

export default () => {
    const reader = new GeoJSONReader();
    let a = reader.read(point([-20, 0]))
    let b = reader.read(point([20, 0]))
    return a
}
