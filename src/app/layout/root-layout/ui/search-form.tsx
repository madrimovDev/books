import { Search } from '@mui/icons-material'
import { Box, IconButton, styled, TextField, Theme } from '@mui/material'

const CustomSearchForm = styled(Box)(({ theme }: { theme: Theme }) => ({
	border: '1px solid transparent',
	borderRadius: theme.spacing(2),
	minWidth: '300px',
	display: 'flex',
	paddingInlineEnd: 16,
	paddingTop: theme.spacing(0.5),
	paddingBottom: theme.spacing(0.5),
	alignItems: 'center',
	'&:focus-within': {
		borderColor: theme.palette.primary.main
	},
	'& .MuiFormControl-root *': {
		border: 'none',
		color: 'white',
		padding: `0 0 ${theme.spacing(0.1)}`
	}
}))

export default function SearchForm() {
	return (
		<CustomSearchForm component='form'>
			<IconButton color='inherit'>
				<Search fontSize='small' />
			</IconButton>
			<TextField
				variant='outlined'
				size='small'
				type='search'
				fullWidth
				placeholder='Search for any training you want '
			/>
		</CustomSearchForm>
	)
}
