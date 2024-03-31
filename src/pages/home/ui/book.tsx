import { useRemoveBook } from '@/app/config/query/books'
import { theme } from '@/app/config/theme'
import { Delete, Edit } from '@mui/icons-material'
import {
	Box,
	Button,
	ButtonGroup,
	List,
	ListItem,
	Paper,
	styled,
	Typography
} from '@mui/material'
import { useState } from 'react'

interface Props {
	book: Books.List
}

const CustomButtonGroup = styled(ButtonGroup)(({ open, theme }) => ({
	position: 'absolute',
	left: '100%',
	top: 0,
	boxShadow: 'none',
	gap: 1,
	visibility: open ? 'visible' : 'hidden',
	opacity: open ? 1 : 0,
	transition: theme.transitions.create(['opacity', 'visible']),
	zIndex: 1,
	'& .MuiButtonBase-root': {
		padding: `${theme.spacing(1)} 0`,
		borderRadius: theme.spacing(1)
	},
	'& .MuiButtonGroup-firstButton': {
		borderBottomLeftRadius: 0
	},
	'& .MuiButtonGroup-lastButton': {
		borderTopLeftRadius: 0
	}
}))

export default function Book({ book }: Props) {
	const [open, setOpen] = useState(false)
	const remove = useRemoveBook()
	return (
		<Paper
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			sx={{
				padding: 4,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				position: 'relative'
			}}
			elevation={6}>
			<Typography
				variant='subtitle1'
				fontWeight={600}>
				{book.book.title}
			</Typography>
			<List
				dense={true}
				sx={{ flexGrow: 1 }}>
				<ListItem disableGutters>Cover: {book.book.cover}</ListItem>
				<ListItem disableGutters>Pages: {book.book.pages}</ListItem>
				<ListItem disableGutters>Published: {book.book.published}</ListItem>
				<ListItem disableGutters>Isbn: {book.book.isbn}</ListItem>
			</List>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'>
				<Typography>
					{book.book.author} / {book.book.published}
				</Typography>
				<Box
					bgcolor={
						book.status === 0
							? theme.palette.primary.main
							: book.status === 1
								? theme.palette.grey[600]
								: 'gray'
					}
					color='white'
					px={2}
					py={0.5}
					fontSize='0.8em'
					borderRadius={999}>
					New
				</Box>
			</Box>
			<CustomButtonGroup
				open={open}
				orientation='vertical'
				variant='contained'>
				<Button
					onClick={() => remove.mutate(book.book.id)}
					color='error'>
					<Delete />
				</Button>
				<Button color='primary'>
					<Edit />
				</Button>
			</CustomButtonGroup>
		</Paper>
	)
}
