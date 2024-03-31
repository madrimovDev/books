import {
	Paper,
	PaperProps,
	styled,
	Typography,
	TypographyProps
} from '@mui/material'
import { HTMLAttributes, PropsWithChildren } from 'react'

const CustomPaper = styled(Paper)<PaperProps>(() => ({
	maxWidth: 430,
	width: '100%',
	padding: '48px 28px',
	borderRadius: 12,
	background: '#FEFEFE',
	boxShadow: '0px 4px 32px 0px #3333330A'
}))

const CustomTitle = styled(Typography)<TypographyProps>(() => ({
	textAlign: 'center',
	fontSize: '36px',
	fontWeight: 700
}))

interface Props extends HTMLAttributes<HTMLFormElement> {
	title: string
}

export default function Form({
	children,
	title,
	...props
}: Props & PropsWithChildren & PaperProps) {
	return (
		<CustomPaper
			component='form'
			{...props}>
			<CustomTitle variant='h2'>{title}</CustomTitle>
			{children}
		</CustomPaper>
	)
}
