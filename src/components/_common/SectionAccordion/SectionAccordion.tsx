import React, { useState } from 'react'
import { SpearIcon } from '@common/Icons'
import {
	AccordionDetails as MUIAccordionDetails,
	AccordionSummary as MUIAccordionSummary,
	styled,
} from '@mui/material'
import MUIAccordion from '@mui/material/Accordion'
import { Typography } from '@common'
import { SectionDescription } from 'types/sections'

interface AccordianProps {
	sectionDescription: SectionDescription[]
}

const CustomAccordian = styled(MUIAccordion)(() => ({
	background: '#ececec',
}))
const CustomAccordionSummary = styled(MUIAccordionSummary)(() => ({}))
const CustomAccordionDetails = styled(MUIAccordionDetails)(() => ({}))

export default function SectionAccordion(props: AccordianProps) {
	const { sectionDescription } = props

	// TODO - open base on params
	const [expanded, setExpanded] = useState<string | false>(false)

	const handleChange =
		(panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false)
		}

	return (
		<div>
			{sectionDescription.map((item, index) => (
				<CustomAccordian
					slotProps={{ transition: { unmountOnExit: true } }}
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
