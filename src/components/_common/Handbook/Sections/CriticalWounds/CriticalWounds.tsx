import { CriticalWoundCards } from '@common'
import { armCriticalWounds, headCriticalWounds } from '@data'
import { Section } from 'types/sections'

export const criticalWoundsSection: Section = {
	title: 'Critical Wounds',
	description: [
		{
			summary: 'Head',
			details: <CriticalWoundCards criticalWounds={headCriticalWounds} />,
		},
		{
			summary: 'Arm',
			details: <CriticalWoundCards criticalWounds={armCriticalWounds} />,
		},
		{
			summary: 'Leg',
			details: <>Under construction</>,
		},
		{
			summary: 'Body',
			details: <>Under construction</>,
		},
	],
}
