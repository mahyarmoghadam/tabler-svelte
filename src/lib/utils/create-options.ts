import { writable } from 'svelte/store'

export const createOptions = (configs) => {
	const { items, key, text } = configs

	const options = writable(Array.isArray(items) ? items : Object.entries(items))

	const getId = (option) => {
		return toId(getKey(option))
	}

	const getKey = (option) => {
		switch (getType(option)) {
			case 'array':
				return option[0]
			case 'object':
				return option[key]
			default:
				return option
		}
	}

	const getText = (option) => {
		switch (getType(option)) {
			case 'array':
				return option[1]
			case 'object':
				return option[text]
			default:
				return option
		}
	}

	const getType = (input) => {
		return Object.prototype.toString
			.call(input)
			.replace('object', '')
			.replace('[', '')
			.replace(']', '')
			.trim()
			.toLowerCase()
	}

	const getValue = (input) => {
		const isMultiple = Array.isArray(input)
		const result = [input].flat().map((input) => {
			const [value, type] = input.split(':')
			switch (type) {
				case 'number':
					return Number(value)
			}
			switch (value) {
				case 'null':
					return null
				case 'undefined':
					return undefined
				default:
					return value
			}
		})
		return isMultiple ? result : result[0]
	}

	const isSelected = (option, value) => {
		if (Array.isArray(value)) {
			return value?.includes(getKey(option))
		}
		return getKey(option) === value
	}

	const toId = (value) => {
		switch (getType(value)) {
			case 'number':
				return `${value}:number`
			default:
				return value
		}
	}

	return {
		options,
		getId,
		getKey,
		getText,
		getValue,
		isSelected,
		toId,
	}
}
