import WKTReader from 'jsts/org/locationtech/jts/io/WKTReader'

export default () => {
    const reader = new WKTReader()
    let a = reader.read('POINT (-20 0)')
    let b = reader.read('POINT (20 0)')
    return a
}
