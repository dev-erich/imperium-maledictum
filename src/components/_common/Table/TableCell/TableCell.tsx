import {
	TableCell as MUITableCell,
	TableCellProps as MUITableCellProps,
	styled,
} from '@mui/material'

interface TableCellProps extends MUITableCellProps {}

const CustomTableCell = styled(MUITableCell)(() => ({
	// padding: '8px',
}))

export default function TableCell(props: TableCellProps) {
	return <CustomTableCell {...props} />
}
