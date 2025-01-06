import Color from './Color.js'

const map = (hexMap, userOptions = {}) => {
	const options = prepOptions(userOptions)
	const result = mappers(hexMap, userOptions)

	for (const name in result) {
		const colorer = result[name]

		result[name] = options.formats.reduce((acc, fmt) => {
			if (fmt === '') {
				acc[''] = colorer(options.defaultFormat)
			} else {
				acc[fmt] = colorer(fmt)
			}

			return acc
		}, {})
	}

	return result
}

const mappers = (hexMap, userOptions = {}) => {
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
		formats: ['', 'rgb', 'raw', 'rawa', 'hex'],
		defaultFormat: 'hex',
		...userOptions,
	}
}

const generateMapper = (color, options) => {
	return (fmt = options.defaultFormat) => {
		switch (fmt) {
			case 'hex':
				return color.toHexString()
			case 'rgb':
				return color.toRgbString()
			case 'raw':
				return color.toArray(false)
			case 'rawa':
				return color.toArray(true)
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
