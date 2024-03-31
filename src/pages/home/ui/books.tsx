import Grid from '@mui/material/Unstable_Grid2'
import Book from './book'
import { useGetBooks } from '@/app/config/query/books'

export default function Books() {
	const books = useGetBooks()
	return (
		<Grid
			container
			spacing={3}
			mt={4}>
			{books.data?.map(book => {
				return (
					<Grid
						key={book.book.id}
						xs={4}>
						<Book book={book} />
					</Grid>
				)
			})}
		</Grid>
	)
}
