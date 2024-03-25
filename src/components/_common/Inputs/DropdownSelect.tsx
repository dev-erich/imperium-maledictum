import {
	SelectProps as MUISelectProps,
	Select as MUISelect,
	MenuItem,
	styled,
	FormControl,
	InputLabel,
} from '@mui/material'

interface AdditionalSelectProps {
	menuItems: string[]
}

type SelectProps<Value = unknown> = MUISelectProps<Value> &
	AdditionalSelectProps

const CustomSelect = styled(MUISelect)(() => ({}))

export default function DropdownSelect(props: SelectProps) {
	const { menuItems = [], ...selectProps } = props

	return (
		<FormControl fullWidth>
			<InputLabel id={props.labelId} sx={{ marginLeft: 0 }}>
				{props.label}
			</InputLabel>
			<CustomSelect {...selectProps}>
				{menuItems.map((menuItem, index) => (
					<MenuItem key={index} value={menuItem}>
						{menuItem}
					</MenuItem>
				))}
			</CustomSelect>
		</FormControl>
	)
}
