
const formatters = (sizeMap, userOptions = {}) => {
	const options = prepOptions(userOptions)
	const denominators = calcConversionDenominators(options.pxPerInch)

	const results = {}

	for (const name in sizeMap) {
		results[name] = generateSizeFunc(sizeMap[name], denominators, options)
	}

	return results
}

const prepOptions = (userOptions) => {
	return {
		pxPerRem: 16.0, // Usually base font size
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

const generateSizeFunc = (px, denominators, options) => {
	// Not perfect but good enough.

	return (fmt=options.defaultFormat) => {
		switch (fmt) {
		case 'px':
			return round(px, 1) + 'px'
		case 'em':
			return round(px / options.pxPerRem, 3) + 'em'
		case 'rem':
			return round(px / options.pxPerRem, 3) + 'rem'
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
			throw new Error(`[P69 Util] Size format not supported: '${fmt}'`)
		}
	}
}

const round = (n, dp = 3) => {
	const mod = Math.pow(10, dp)
	const result = Math.round(n * mod)
	return result / mod
}

export default Object.freeze({
	formatters,
})
