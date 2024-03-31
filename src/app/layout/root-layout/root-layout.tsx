import { Box, Container } from '@mui/material'
import Header from './header'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
	return (
		<Box sx={{ minHeight: '100vh' }}>
			<Header />
			<Container maxWidth='xl'>
				<Outlet />
			</Container>
		</Box>
	)
}
