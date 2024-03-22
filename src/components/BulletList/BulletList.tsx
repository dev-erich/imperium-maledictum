import { SkullIcon } from '@icons'
import List, { ListProps } from '@mui/material/List'
import ListItemText, { ListItemTextProps } from '@mui/material/ListItemText'
import { ListItem, ListItemIcon, styled } from '@mui/material'

interface BulletListProps extends ListProps {
	bulletPoints: ListItemTextProps[]
	showBullet?: boolean
}

const StyledList = styled(List)(() => ({
	paddingLeft: '8px',
	paddingRight: '8px',
}))

const StyledListItem = styled(ListItem)(() => ({
	paddingLeft: '8px',
	paddingRight: '8px',
	paddingTop: 0,
	paddingBottom: 0,
}))

const StyledListItemIcon = styled(ListItemIcon)(() => ({
	minWidth: '40px',
}))

const StyledListItemText = styled(ListItemText)(() => ({
	marginTop: 0,
	marginBottom: 0,
}))

export default function BulletList(props: BulletListProps) {
	const { showBullet, bulletPoints, ...listProps } = props

	return (
		<StyledList {...listProps}>
			{bulletPoints.map((bulletPoint, index) => {
				return (
					<StyledListItem key={index}>
						{showBullet && (
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
