const generate = (varMap, userOptions = {}) => {
	const options = prepOptions(userOptions)

	const flatVarMap = {}
	flatten(flatVarMap, varMap, '')

	const variables = compileVariables(flatVarMap)

	if (options.prefix) {
		prefixVariables(variables, options.prefix, options.prefixFirst)
	}

	return variables.join(';\n')
}

const prepOptions = (userOptions) => {
	return {
		prefix: '',
		prefixFirst: false,
		...userOptions,
	}
}

const flatten = (flatVarMap, varMap, parent) => {
	for (const child in varMap) {
		const flatName = createFlatName(parent, child)
		appendFlatValue(flatVarMap, flatName, varMap[child])
	}
}

const createFlatName = (parent, child) => {
	if (parent && child) {
		return `${parent}-${child}`
	}

	return parent ? parent : child
}

const appendFlatValue = (flatVarMap, flatName, value) => {
	if (isObject(value)) {
		flatten(flatVarMap, value, flatName)
	} else {
		flatVarMap[flatName] = value
	}
}

const isObject = (v) => {
	return typeof v === 'object' && !Array.isArray(v) && v !== null
}

const compileVariables = (flatVarMap) => {
	const lines = []

	for (const name in flatVarMap) {
		lines.push(`--${name}: ${flatVarMap[name]}`)
	}

	return lines
}

const prefixVariables = (variables, prefix, prefixFirst) => {
	for (let i = 0; i < variables.length; i++) {
		if (i === 0 && !prefixFirst) {
			continue
		}

		variables[i] = prefix + variables[i].trim()
	}
}

export default Object.freeze({
	generate,
})
