import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	Input,
	InputLabel
} from '@mui/material'
import { useBookModal } from '../utils/useBookModal'
import { Link } from '@mui/icons-material'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useCreateBook } from '@/app/config/query/books'

interface FormData {
	isbn: string
}

const createBookScheme = Joi.object<FormData>({
	isbn: Joi.string().required()
})

export default function CreateBook() {
	const { open, onClose } = useBookModal()
	const { register, handleSubmit } = useForm<FormData>({
		resolver: joiResolver(createBookScheme)
	})
	const create = useCreateBook()
	const onSubmit = (data: FormData) => {
		create.mutateAsync(data.isbn).then(onClose)
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}>
			<DialogTitle>Create Book</DialogTitle>
			<DialogContent sx={{ minWidth: 400, pt: 10 }}>
				<form
					id='create-book'
					onSubmit={handleSubmit(onSubmit)}>
					<FormControl
						variant='standard'
						fullWidth>
						<InputLabel>ISBN</InputLabel>
						<Input
							fullWidth
							{...register('isbn')}
							startAdornment={<Link sx={{ mr: 1 }} />}
						/>
					</FormControl>
				</form>
			</DialogContent>
			<DialogActions>
				<Button
					form='create-book'
					type='submit'>
					Create
				</Button>
				<Button
					color='error'
					onClick={onClose}>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	)
}
