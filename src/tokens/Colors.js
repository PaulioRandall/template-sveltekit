import Color from './Color.js'

const map = (hexMap, userOptions = {}) => {
	const result = mappers(hexMap, userOptions)

	for (const name in result) {
		const colorer = result[name]
		result[name] = {
			hex: colorer('hex'),
			rgb: colorer('rgb'),
			raw: colorer('raw'),
		}
	}

	return result
}

const mappers = (hexMap, userOptions={}) => {
	const options = prepOptions(userOptions)
	const result = {}

	for (const name in hexMap) {
		const color = Color.fromHex(hexMap[name])
		result[name] = generateMapper(color, options)
	}

	return result
}

const prepOptions = (userOptions) => {
	return {
		defaultFormat: 'hex',
		...userOptions,
	}
}

const generateMapper = (color, options) => {
	return (fmt=options.defaultFormat) => {
		switch (fmt) {
		case 'hex':
			return color.toHexString()
		case 'rgb':
			return color.toRgbString()		
		case 'raw':
			return color.toArray()
		case 'hsl':			
		case 'hwb':
		default:
			throw new Error(`[P69 Util] Color format not supported: '${fmt}'`)
		}
	}
}

export default Object.freeze({
	map,
	mappers,
})
