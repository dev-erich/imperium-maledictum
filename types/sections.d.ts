export type Section = {
	title: string
	description: SectionDescription[]
}

export type SectionDescription = {
	summary: string
	details: React.ReactNode
}
