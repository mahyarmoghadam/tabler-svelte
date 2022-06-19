import { getContext, hasContext, setContext } from 'svelte'
import { writable } from 'svelte/store'

export const shareProperty = (key: string, value: any) => {
	if (!hasContext(key)) setContext(key, writable(value))
	const context = getContext(key) as any
	context.set(value)
	return context
}
