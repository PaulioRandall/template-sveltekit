
const formatters = (rgbMap, options={}) => {
	options = {
		defaultFormat: 'hex',
		...options,
	}

	const result = {}

	for (const name in rgbMap) {
		result[name] = generateFormatterFunc(rgbMap[name], options)
	}

	return result
}

const generateFormatterFunc = (rgb, options) => {
	return (fmt=options.defaultFormat) => {
		switch (fmt) {
		case 'hex':
			return rgbToHexString(rgb)
		case 'rgb':
			return rgbToRgbString(rgb)		
		case 'raw':
			return rgb
		case 'hsl':			
		case 'hwb':
		default:
			throw new Error(`[P69 Util] Color format not supported: '${fmt}'`)
		}
	}
}

// rgbToRgbString converts an RGB or RGBA array, i.e. [r,g,b] or [r,g,b,a],
// into a CSS RGB or RGBA string, i.e. `rgb(r,g,b)` or `rgba(r,g,b,a)`.
const rgbToRgbString = (rgb) => {
	switch (rgb.length) {
		case 3:
			return `rgb(${rgb[0]} ${rgb[1]} ${rgb[2]})`
		case 4:
			return `rgba(${rgb[0]} ${rgb[1]} ${rgb[2]} / ${rgb[3]})`
		default:
			throw new Error(`[P69 Util] Invalid RGB value: '${rgb}'`)
	}
}

// stringifyHEX converts an RGB or RGBA array, i.e. [r,g,b] or [r,g,b,a],
// into a CSS HEX string, i.e. `#RRGGBB` or `#RRGGBBAA`.
const rgbToHexString = (rgb) => {
	const hex = rgbToHex(rgb)
	
	switch (hex.length) {
		case 3:
			return `#${hex[0]}${hex[1]}${hex[2]}`
		case 4:
			return `#${hex[0]}${hex[1]}${hex[2]}${hex[3]}`
		default:
			throw new Error(`[P69 Util] Invalid HE value: '${hex}'`)
	}
}

const rgbToHex = (rgb) => {
  rgb = structuredClone(rgb)
  
  for (let i = 0; i < rgb.length; i++) {
  	rgb[i] = rgb[i].toString(16).padStart(2, '0')
  }

  return rgb
}

export default Object.freeze({
	formatters,
	rgbToRgbString,
	rgbToHexString,
})
