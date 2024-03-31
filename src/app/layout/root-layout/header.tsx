import {
	AppBar,
	Box,
	colors,
	Container,
	IconButton,
	Stack,
	Toolbar,
	Typography
} from '@mui/material'
import { Link } from 'react-router-dom'
import { CloudDone, Notifications } from '@mui/icons-material'
import SearchForm from './ui/search-form'
import Profile from './ui/profile'
export default function Header() {
	return (
		<AppBar
			position='static'
			sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
			<Container maxWidth='xl'>
				<Toolbar sx={{ padding: [4, 0] }}>
					<CloudDone />
					<Typography
						variant='h6'
						noWrap
						component={Link}
						to='/'
						sx={{
							mr: 2,
							fontWeight: 700,
							color: colors.deepPurple[600],
							textDecoration: 'none'
						}}>
						Books{' '}
						<Typography
							fontWeight='inherit'
							fontSize='inherit'
							color='white'
							component='span'>
							list
						</Typography>
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between'
						}}>
						<SearchForm />
						<Stack
							spacing={2}
							direction='row'>
							<IconButton>
								<Notifications />
							</IconButton>
							<Profile />
						</Stack>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
