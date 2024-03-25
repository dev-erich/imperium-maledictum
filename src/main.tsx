import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { CharacterEditor, Home, PlayerHandbook, MyCharacter } from '@routes'
import { theme } from '@theme'
import { CharacterProvider, Navbar, PlayerHandbookProvider } from '@hooks'

import './index.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<CharacterProvider>
				<Navbar>
					<PlayerHandbookProvider>
						<Outlet />
					</PlayerHandbookProvider>
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
				path: '/character-editor',
				element: <CharacterEditor />,
			},
			{
				path: '/my-character',
				element: <MyCharacter />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	// </React.StrictMode>
)
