export function getStatBonus(starting: number, advances: number): number {
	const total = Math.floor((starting + advances) / 10) * 10
	const bonus = Math.floor(total / 10) % 10
	return bonus
}
