import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { SkullIcon } from 'src/assets/Icons'

export default function Combat() {
	return (
		<>
			<Typography variant="h2" align="center">
				Combat
			</Typography>

			<Typography variant="h3">Surprise</Typography>
			<Typography>
				If you have the element of surprise, you get a special surprise round
				where only you can act.
				<br />
				When you have surprise, you gain the following benefits:
			</Typography>
			<List>
				<ListItem>
					<ListItemIcon>
						<SkullIcon />
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography variant="body1">
								You can use your Move and take an Action
							</Typography>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<SkullIcon />
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography variant="body1">
								You have Advantage on Melee Tests, and the target can’t oppose
								your attack.
							</Typography>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<SkullIcon />
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography variant="body1">
								When the surprise round ends, the party gains
								<Typography
									component="span"
									fontStyle="italic"
									sx={{ color: '#3796df' }}
								>
									+1 Superiority
								</Typography>
								.
							</Typography>
						}
					/>
				</ListItem>
			</List>

			<Divider
				sx={{
					padding: '5px',
					margin: '10px',
				}}
			/>

			<Typography variant="h3">Actions</Typography>
			<Typography variant="body1">
				This section provides a number of Actions you can take in combat. You
				may also gain new Actions from
				<Typography
					component="span"
					fontStyle="italic"
					sx={{ color: '#3796df' }}
				>
					Talents
				</Typography>
				,
				<Typography
					component="span"
					fontStyle="italic"
					sx={{ color: '#3796df' }}
				>
					gear
				</Typography>
				, or
				<Typography
					component="span"
					fontStyle="italic"
					sx={{ color: '#3796df' }}
				>
					Psychic Powers
				</Typography>
				.
			</Typography>

			<Divider
				sx={{
					padding: '5px',
					margin: '10px',
				}}
			/>

			<Typography variant="h3">Reactions</Typography>
			<Typography variant="body1">
				A Reaction is something you do on someone else's turn. The most common
				form of Reaction is attempting to
				<Typography component="span" sx={{ color: '#3796df' }}>
					dodge a ranged attack
				</Typography>
				, but Psykers may also use their Reaction to
				<Typography
					component="span"
					fontStyle="italic"
					sx={{ color: '#3796df' }}
				>
					Deny the Witch
				</Typography>
				. Unless a rule such as a Talent or item of gear specifies otherwise,
				you may only take one Reaction until the beginning of your next turn.
			</Typography>

			<Divider
				sx={{
					padding: '5px',
					margin: '10px',
				}}
			/>

			<Typography variant="h3">Free Actions</Typography>
			<Typography variant="body1">
				Some of the things you’ll do during combat do not require an Action.
				This includes drawing your weapon, opening a door, or moving anywhere
				within your Zone. The GM determines if what you are doing is an Action
				or a Free Action. As a rule of thumb, if something requires you to make
				a Test, it is an Action.
			</Typography>

			<Divider
				sx={{
					padding: '5px',
					margin: '10px',
				}}
			/>

			<Typography variant="h3">Cover</Typography>
			<Typography variant="body1">
				There are three types of cover: Light Cover, Medium Cover and Heavy
				Cover. A target can only benefit from one type of cover at a time.
			</Typography>
			<List>
				<ListItem>
					<ListItemIcon>
						<SkullIcon />
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography variant="body1">
								Light Cover is usually about chest-high, and is large enough for
								a character to crouch behind to cover most of their body. Light
								Cover grants +2 Armour to
								<Typography
									component="span"
									fontStyle="italic"
									sx={{ color: '#3796df' }}
								>
									all Hit Locations
								</Typography>
								for ranged attacks.
							</Typography>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<SkullIcon />
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography variant="body1">
								Medium Cover can protect most of a character's body, but still
								leaves some areas exposed. Medium Cover grants +4 Armour to
								<Typography
									component="span"
									fontStyle="italic"
									sx={{ color: '#3796df' }}
								>
									all Hit Locations
								</Typography>
								for ranged attacks.
							</Typography>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<SkullIcon />
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography variant="body1">
								Heavy Cover can protect a character’s entire body, and is large
								enough to comfortably stand behind. Heavy Cover grants +6 Armour
								to
								<Typography
									component="span"
									fontStyle="italic"
									sx={{ color: '#3796df' }}
								>
									all Hit Locations
								</Typography>
								for ranged attacks.
							</Typography>
						}
					/>
				</ListItem>
			</List>
		</>
	)
}
