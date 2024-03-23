import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import {
	CharacterCreation,
	Home,
	PlayerHandbook,
	SessionTracker,
} from '@routes'
import { theme } from '@theme'
import { CharacterProvider, Navbar } from '@hooks'

import './index.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<CharacterProvider>
				<Navbar>
					<Outlet />
				</Navbar>
			</CharacterProvider>
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
			{
				path: '/session-tracker',
				element: <SessionTracker />,
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
