declare module 'santas-special-list' {
	export type Status = 'naughty' | 'nice'

	export type Child = {
		name: string,
		status: Status
	}

	export type List = Array<Child>
}
