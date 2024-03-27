import { SkullIcon } from '@icons'
import List, { ListProps } from '@mui/material/List'
import ListItemText, { ListItemTextProps } from '@mui/material/ListItemText'
import { ListItem, ListItemIcon, styled } from '@mui/material'

interface BulletListProps extends CustomListProps {
	bulletPoints: ListItemTextProps[]
	bullets?: boolean
}

interface CustomListProps extends ListProps {
	indented?: number
}

const StyledList = styled(List)<CustomListProps>(({ indented }) => ({
	paddingTop: 0,
	paddingBottom: 0,
	paddingLeft: '12px',
	paddingRight: '8px',
	...(indented && {
		marginLeft: `${(indented + 1) * 12 - indented * 6}px`,
	}),
}))

const StyledListItem = styled(ListItem)(() => ({
	paddingLeft: 0,
	paddingRight: 0,
	paddingTop: 0,
	paddingBottom: 0,
	alignItems: 'flex-start',
}))

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
	minWidth: '30px',
	minHeight: '30px',
	paddingTop: '4px',
	[theme.breakpoints.down('md')]: {
		paddingTop: '8px',
		minWidth: '15px',
		minHeight: '15px',
		height: '100%',
	},
}))

const StyledListItemText = styled(ListItemText)(() => ({
	marginTop: 0,
	marginBottom: 0,
	'& .MuiListItemText-secondary': {
		fontStyle: 'italic',
	},
}))

export default function BulletList(props: BulletListProps) {
	const { bullets, bulletPoints, ...otherProps } = props

	return (
		<StyledList {...otherProps}>
			{bulletPoints.map((bulletPoint, index) => {
				return (
					<StyledListItem key={index}>
						{bullets && (
							<StyledListItemIcon>
								<SkullIcon />
							</StyledListItemIcon>
						)}
						<StyledListItemText {...bulletPoint} />
					</StyledListItem>
				)
			})}
		</StyledList>
	)
}
