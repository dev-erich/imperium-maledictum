import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { CharacterCreation, Home, PlayerHandbook } from '@routes'
import { Navbar } from '@layout'
import { theme } from './theme'

import './index.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Navbar>
					<Outlet />
				</Navbar>
			</>
		),
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/player-handbook',
				element: <PlayerHandbook />,
			},
			{
				path: '/character-creation',
				element: <CharacterCreation />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
)
