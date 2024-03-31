import { Add } from '@mui/icons-material'
import { Box, Stack, Typography, Button } from '@mui/material'
import { useBookModal } from '../utils/useBookModal'
import { useGetBooks } from '@/app/config/query/books/useGetBooks'

export default function HomeTop() {
	const onOpen = useBookModal(s => s.onOpen)
	const books = useGetBooks()
	return (
		<Box
			mt={4}
			display='flex'
			justifyContent='space-between'
			alignItems='flex-start'>
			<Stack spacing={2}>
				<Typography
					variant='h1'
					fontSize='36px'
					color='white'>
					You've
					<Typography
						variant='h1'
						display='inline'
						ml={2}
						fontSize='inherit'
						color='primary'>
						{books.data?.length || 0} books
					</Typography>
				</Typography>
				<Typography
					variant='body1'
					color='white'>
					Your books today
				</Typography>
			</Stack>
			<Button
				startIcon={<Add />}
				onClick={onOpen}
				variant='contained'>
				Create a Book
			</Button>
		</Box>
	)
}
