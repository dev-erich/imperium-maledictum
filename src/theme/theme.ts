import { createTheme, Theme } from '@mui/material'

const baseTheme = createTheme({
	typography: {
		fontFamily: ['Tomorrow', 'sans-serif'].join(','),
	},
	palette: {
		primary: {
			main: 'rgba(0, 0, 0, 0.87)',
		},
		secondary: {
			main: '#3796df',
		},
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage:
						"url('https://www.toptal.com/designers/subtlepatterns/uploads/seamless_paper_texture.png')",
					backgroundRepeat: 'repeat',
					backgroundAttachment: 'fixed',
					backgroundPosition: '0 0',
				},
			},
		},
	},
})

const responsiveFontSizes = (theme: Theme): Theme => {
	console.log('🚀 \n theme:', theme)
	return {
		...theme,
		typography: {
			...theme.typography,
			h1: {
				...theme.typography.h1,
				// fontSize: '3.75rem',
				fontWeight: 500,
				fontFamily: ['Black Ops One', 'sans-serif'].join(','),
				color: '#efefef',
				textTransform: 'uppercase',
				textShadow: '1.5px 1.5px #6a6a6a',
				[theme.breakpoints.down('md')]: {
					lineHeight: '1.5rem',
					fontSize: '2rem',
				},
			},
			h2: {
				...theme.typography.h2,
				// fontSize: '3.75rem',
				fontWeight: 700,
				[theme.breakpoints.down('md')]: {
					fontSize: '1.5rem',
				},
			},
			h3: {
				...theme.typography.h3,
				// fontSize: '3.75rem',
				fontWeight: 500,
				[theme.breakpoints.down('md')]: {
					fontSize: '1.2rem',
					lineHeight: '2rem',
				},
			},
			body1: {
				...theme.typography.body1,
				margin: '6px',
				[theme.breakpoints.down('md')]: {
					lineHeight: '1.1rem',
				},
			},
		},
	}
}

export const theme: Theme = responsiveFontSizes(baseTheme)
