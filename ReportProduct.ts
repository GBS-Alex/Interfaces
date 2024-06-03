export interface ReportProduct {
	index: number
	name: string
	description: string
	layouts: Array<{index: number, placed: number}>
}