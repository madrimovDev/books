import {
	alpha,
	FormControl,
	FormControlProps,
	FormHelperText,
	InputBase,
	InputBaseProps,
	InputLabel,
	styled
} from '@mui/material'
import { forwardRef } from 'react'

const CustomInput = styled(InputBase)(({ theme }) => ({
	'label + &': {
		marginTop: theme.spacing(3)
	},
	'& .MuiInputBase-input': {
		'&[aria-invalid="true"]': {
			borderColor: 'red'
		},
		width: '100%',
		borderRadius: 6,
		position: 'relative',
		backgroundColor: '#FEFEFE',
		border: '1px solid',
		borderColor: '#EBEBEB',
		fontSize: 16,
		padding: '10px 12px',
		boxShadow: '0px 4px 18px 0px #3333330A',
		transition: theme.transitions.create([
			'border-color',
			'background-color',
			'box-shadow'
		]),
		'&:focus': {
			boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
			borderColor: theme.palette.primary.main
		}
	}
}))

interface Props extends InputBaseProps {
	label: string
	formControl?: FormControlProps & {
		errorMessage?: string
	}
}

const Input = forwardRef<HTMLInputElement, Props>(
	({ label, formControl, ...inputProps }, ref) => {
		return (
			<FormControl
				variant='standard'
				sx={{ width: '100%' }}
				{...formControl}>
				<InputLabel shrink>{label}</InputLabel>
				<CustomInput
					{...inputProps}
					ref={ref}
				/>
				{formControl?.errorMessage && (
					<FormHelperText>{formControl.errorMessage}</FormHelperText>
				)}
			</FormControl>
		)
	}
)

export default Input
