const map = (sizeMap, userOptions = {}) => {
	const options = prepMapOptions(userOptions)
	const result = mappers(sizeMap, userOptions)

	for (const name in result) {
		const sizer = result[name]

		result[name] = options.formats.reduce((acc, fmt) => {
			if (fmt === '') {
				acc[''] = sizer(options.defaultFormat)
			} else {
				acc[fmt] = sizer(fmt)
			}

			return acc
		}, {})
	}

	return result
}

const mappers = (sizeMap, userOptions = {}) => {
	const options = prepMapOptions(userOptions)

	const results = {}

	for (const name in sizeMap) {
		results[name] = generateMapper(sizeMap[name], options)
	}

	return results
}

const prepMapOptions = (userOptions) => {
	return {
		pxPerRem: 16.0, // E.g. base font size
		formats: ['', 'px', 'em', 'rem'],
		defaultFormat: 'rem',
		...userOptions,
	}
}

const generateMapper = (px, options) => {
	return (fmt = options.defaultFormat) => {
		switch (fmt) {
			case 'px':
				return round(px, 1) + 'px'
			case 'em':
				return round(px / options.pxPerRem, 3) + 'em'
			case 'rem':
				return round(px / options.pxPerRem, 3) + 'rem'
			default:
				throw new Error(`[P69 Util] Size format not supported: '${fmt}'`)
		}
	}
}

const absMap = (sizeMap, userOptions = {}) => {
	const result = absMappers(sizeMap, userOptions)

	for (const name in result) {
		const sizer = result[name]
		result[name] = {
			px: sizer('px'),
			pt: sizer('pt'),
			pc: sizer('pc'),
			in: sizer('in'),
			cm: sizer('cm'),
			mm: sizer('mm'),
		}
	}

	return result
}

const absMappers = (sizeMap, userOptions = {}) => {
	const options = prepAbsMapOptions(userOptions)
	const denominators = calcConversionDenominators(options.pxPerInch)

	const results = {}

	for (const name in sizeMap) {
		results[name] = generateAbsMapper(sizeMap[name], denominators, options)
	}

	return results
}

const prepAbsMapOptions = (userOptions) => {
	return {
		pxPerInch: 96.0, // Some may refer to it as DPI
		defaultFormat: 'rem',
		...userOptions,
	}
}

const calcConversionDenominators = (PX_PER_INCH) => {
	// Not perfect but good enough.

	const PX_PER_MM = PX_PER_INCH * 0.03937
	const PX_PER_PT = PX_PER_INCH / 72.0

	return {
		PX_PER_INCH,
		PX_PER_MM,
		PX_PER_CM: PX_PER_MM * 10.0,
		PX_PER_PT,
		PX_PER_PC: PX_PER_PT * 12,
	}
}

const generateAbsMapper = (px, denominators, options) => {
	// Not perfect but good enough.

	return (fmt = options.defaultFormat) => {
		switch (fmt) {
			case 'px':
				return round(px, 1) + 'px'
			case 'pt':
				return round(px / denominators.PX_PER_PT, 1) + 'pt'
			case 'pc':
				return round(px / denominators.PX_PER_PC, 2) + 'pc'
			case 'in':
				return round(px / denominators.PX_PER_INCH, 3) + 'in'
			case 'cm':
				return round(px / denominators.PX_PER_CM, 2) + 'cm'
			case 'mm':
				return round(px / denominators.PX_PER_MM, 1) + 'mm'
			default:
				throw new Error(
					`[P69 Util] Absolute size format not supported: '${fmt}'`
				)
		}
	}
}

const round = (n, dp = 3) => {
	const mod = Math.pow(10, dp)
	const result = Math.round(n * mod)
	return result / mod
}

export default Object.freeze({
	map,
	mappers,
	absMap,
	absMappers,
})
