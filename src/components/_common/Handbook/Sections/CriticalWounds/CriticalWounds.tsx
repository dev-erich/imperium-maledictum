import { CriticalWoundCards } from '@common'
import {
	armCriticalWounds,
	bodyCriticalWounds,
	headCriticalWounds,
	legCriticalWounds,
} from '@data'
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
			details: <CriticalWoundCards criticalWounds={legCriticalWounds} />,
		},
		{
			summary: 'Body',
			details: <CriticalWoundCards criticalWounds={bodyCriticalWounds} />,
		},
	],
}
