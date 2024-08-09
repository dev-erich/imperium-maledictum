import { createTheme, Theme } from '@mui/material'

const baseTheme = createTheme({
	typography: {
		fontFamily: ['Tomorrow', 'sans-serif'].join(','),
	},
	palette: {
		primary: {
			main: '#2e2e2e',
		},
		secondary: {
			light: '',
			main: '#3796df',
			dark: '',
		},
		success: {
			main: '#38703a',
		},
		error: {
			main: '#b93131',
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
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					'@media (max-width:960px)': {
						width: '0.65em',
						height: '0.65em',
					},
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					marginLeft: 0,
					marginRight: 0,
				},
			},
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					marginLeft: 0,
				},
			},
		},
	},
})

const responsiveFontSizes = (theme: Theme): Theme => {
	return {
		...theme,
		typography: {
			...theme.typography,
			h1: {
				...theme.typography.h1,
				lineHeight: '1.8rem',
				fontSize: '2rem',
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
				fontSize: '1.5rem',
				fontWeight: 700,
				textShadow: '1.5px 1.5px #6a6a6a',
				[theme.breakpoints.down('md')]: {
					fontSize: '1.5rem',
				},
			},
			h3: {
				...theme.typography.h3,
				// fontSize: '3.75rem',
				fontSize: '1.3rem',
				lineHeight: '2rem',
				fontWeight: 600,
				[theme.breakpoints.down('md')]: {
					fontSize: '1.3rem',
					lineHeight: '2rem',
					marginBottom: '3px',
				},
			},
			h4: {
				...theme.typography.h4,
				// fontSize: '3.75rem',
				fontSize: '1.1rem',
				lineHeight: '2rem',
				fontWeight: 500,
				marginLeft: '12px',
				[theme.breakpoints.down('md')]: {
					fontSize: '1.1rem',
					lineHeight: '2rem',
				},
			},
			h5: {
				...theme.typography.h4,
				// fontSize: '3.75rem',
				fontSize: '1rem',
				lineHeight: '2rem',
				fontWeight: 500,
				marginLeft: '24px',
				[theme.breakpoints.down('md')]: {
					fontSize: '1rem',
					lineHeight: '2rem',
				},
			},
			h6: {
				...theme.typography.h5,
				fontSize: '1rem',
				lineHeight: '2rem',
				fontWeight: 500,
				marginLeft: '0',
			},
			body1: {
				...theme.typography.body1,
				lineHeight: '1.1rem',
				marginTop: '6px',
				marginRight: '6px',
				marginBottom: '6px',
				marginLeft: '12px',
				fontSize: '0.9rem',
				[theme.breakpoints.down('md')]: {
					lineHeight: '1.1rem',
				},
			},
			body2: {
				...theme.typography.body2,
				lineHeight: '1.1rem',
				marginTop: '6px',
				marginRight: '6px',
				marginBottom: '6px',
				marginLeft: '10px',
				[theme.breakpoints.down('md')]: {
					lineHeight: '1.1rem',
				},
			},
		},
	}
}

export const theme: Theme = responsiveFontSizes(baseTheme)
