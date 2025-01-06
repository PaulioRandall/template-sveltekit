
export default class Color {
	static fromRgb(rgbStr) {
		const rgb = parseRgb(rgb)
		return new Color(rgb)
	}

	static fromHex(hexStr) {
		const rgb = parseHex(hexStr)
		return new Color(rgb)
	}

	constructor({ r=0, g=0, b=0, a=0 }) {
		this.r = r ? r : 0
		this.g = g ? g : 0
		this.b = b ? b : 0
		this.a = a ? a : 0
	}

	toArray() {
		return [this.r, this.g, this.b, this.a]
	}

	toRgbString() {
		if (this.a) {
			return `rgba(${this.r} ${this.g} ${this.b} / ${this.a})`
		}

		return `rgb(${this.r} ${this.g} ${this.b})`
	}

	toHexString() {
		const mapComponent = (c) => c.toString(16).padStart(2, '0')
  
	  const hex = {
	  	r: mapComponent(this.r),
	  	g: mapComponent(this.g),
	  	b: mapComponent(this.b),
	  	a: this.a ? mapComponent(this.a) : ''
	  }

		return `#${hex.r}${hex.g}${hex.b}${hex.a}`
	}
}

const parseRgb = (s) => {
	s = s.trim()

	// rgb(r, g, b)
	const RGB_CSV = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i
	
	// rgb(r g b)
	const RGB_SSV = /^rgb\(\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s*\)$/i
	
	// rgb(r, g, b, a)
	const RGBA_CSV = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i

	// rgb(r g b / a)
	const RGBA_Solidus = /^rgb\(\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s*\)$/i

	let match = RGB_CSV.exec(s)
	if (match) {
		return  {
	    r: parseInt(match[1]),
	    g: parseInt(match[2]),
	    b: parseInt(match[3]),
	    a: 0,
	  }
	}

	match = RGB_SSV.exec(s)
	if (match) {
		return  {
	    r: parseInt(match[1]),
	    g: parseInt(match[2]),
	    b: parseInt(match[3]),
	    a: 0,
	  }
	}

	match = RGBA_CSV.exec(s)
	if (match) {
		return  {
	    r: parseInt(match[1]),
	    g: parseInt(match[2]),
	    b: parseInt(match[3]),
	    a: parseInt(match[4]),
	  }
	}

	match = RGBA_Solidus.exec(s)
	if (match) {
		return  {
	    r: parseInt(match[1]),
	    g: parseInt(match[2]),
	    b: parseInt(match[3]),
 	    a: parseInt(match[4]),
	  }
	}

	throw new Error(`[P69 Util] Invalid rgb string: '${s}'`)
}

const parseHex = (s) => {
	s = s.trim()

	// #RRGGBB
	const RGB6 = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i
	
	// #RGB
	const RGB3 = /^#([0-9a-f]{1})([0-9a-f]{1})([0-9a-f]{1})$/i
	
	// #RRGGBBAA
	const RGBA6 = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i

	// #RGBA
	const RGBA3 = /^#([0-9a-f]{1})([0-9a-f]{1})([0-9a-f]{1})([0-9a-f]{1})$/i
	
	let match = RGB6.exec(s)
	if (match) {
		return  {
	    r: parseInt(match[1], 16),
	    g: parseInt(match[2], 16),
	    b: parseInt(match[3], 16),
	    a: 0,
	  }
	}

	match = RGB3.exec(s)
	if (match) {
		return  {
	    r: parseInt(match[1]+match[1], 16),
	    g: parseInt(match[2]+match[2], 16),
	    b: parseInt(match[3]+match[3], 16),
	    a: 0,
	  }
	}

	match = RGBA6.exec(s)
	if (match) {
		return  {
	    r: parseInt(match[1], 16),
	    g: parseInt(match[2], 16),
	    b: parseInt(match[3], 16),
	    a: parseInt(match[4], 16),
	  }
	}

	match = RGBA3.exec(s)
	if (match) {
		return  {
	    r: parseInt(match[1]+match[1], 16),
	    g: parseInt(match[2]+match[2], 16),
	    b: parseInt(match[3]+match[3], 16),
 	    a: parseInt(match[4]+match[4], 16),
	  }
	}

	throw new Error(`[P69 Util] Invalid hex string: '${s}'`)
}
