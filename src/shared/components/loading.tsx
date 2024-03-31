import { Box, CircularProgress } from '@mui/material'

export default function Loading() {
	return (
		<Box sx={{ height: '100vh', width: '100%', display: 'grid', placeItems: 'center' }}>
			<CircularProgress />
		</Box>
	)
}
