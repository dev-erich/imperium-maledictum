import React, { useState } from 'react'
import { SpearIcon } from '@common/Icons'
import {
	AccordionDetails as MUIAccordionDetails,
	AccordionSummary as MUIAccordionSummary,
	styled,
} from '@mui/material'
import MUIAccordion from '@mui/material/Accordion'
import { Typography } from '@common'

interface AccordianProps {
	data: {
		summary: string
		details: string | React.ReactNode
	}[]
}

const CustomAccordian = styled(MUIAccordion)(() => ({
	background: '#ececec',
}))
const CustomAccordionSummary = styled(MUIAccordionSummary)(() => ({}))
const CustomAccordionDetails = styled(MUIAccordionDetails)(() => ({}))

export default function Accordion(props: AccordianProps) {
	const { data } = props

	const [expanded, setExpanded] = useState<string | false>('panel-0')

	const handleChange =
		(panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false)
		}

	return (
		<div>
			{data.map((item, index) => (
				<CustomAccordian
					expanded={expanded === `panel-${index}`}
					onChange={handleChange(`panel-${index}`)}
					key={index}
				>
					<CustomAccordionSummary
						aria-controls={`panel-${index}d-content`}
						id={`panel-${index}`}
						expandIcon={<SpearIcon fontSize="large" />}
					>
						<Typography variant="h3">{item.summary}</Typography>
					</CustomAccordionSummary>
					<CustomAccordionDetails>{item.details}</CustomAccordionDetails>
				</CustomAccordian>
			))}
		</div>
	)
}
