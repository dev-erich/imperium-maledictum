import { Typography } from '@common'
import { PageWrapper } from '@layout'
import { Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

export default function CharacterNotFound() {
	return (
		<PageWrapper>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Typography variant="h3">Missing Character Data</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1">
						Warrior of the Imperium, your saga awaits its beginning. Forge your
						legacy amidst the stars by giving name and form to your character.
						The annals of history beckon—will you leave your mark or be
						forgotten in the darkness? Let your story unfold.
						<br />
						<br />
						The galaxy calls for its heroes...
						<br />
						<br />
						Heed its call.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Link to="/character-editor">
						<Button variant="contained">Create Character</Button>
					</Link>
				</Grid>
			</Grid>
		</PageWrapper>
	)
}
