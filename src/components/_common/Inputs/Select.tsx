import {
	SelectProps as MUISelectProps,
	Select as MUISelect,
	MenuItem,
	styled,
} from '@mui/material'

interface AdditionalSelectProps {
	menuItems: string[]
}

type SelectProps<Value = unknown> = MUISelectProps<Value> &
	AdditionalSelectProps

const CustomSelect = styled(MUISelect)(() => ({}))

export default function Select(props: SelectProps) {
	const { menuItems = [], ...selectProps } = props

	return (
		<CustomSelect {...selectProps}>
			{menuItems.map((menuItem, index) => (
				<MenuItem key={index} value={menuItem}>
					{menuItem}
				</MenuItem>
			))}
		</CustomSelect>
	)
}
