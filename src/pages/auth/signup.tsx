import { Alert, Box, Button, Link, Stack, Typography } from '@mui/material'
import Form from './ui/form'
import Input from './ui/input'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { useSignUp } from '@/app/config/query/auth'
import { useLayoutEffect, useState } from 'react'
import { localStorage } from '@/shared/utils'
import { useNavigate } from 'react-router-dom'

interface FormData {
	email: string
	name: string
	key: string
}

const signUpScheme = Joi.object<FormData>({
	email: Joi.string().email({ tlds: false }).required(),
	name: Joi.string().min(3).required(),
	key: Joi.string().min(4).required().messages({
		'string.min': 'Password must be at least {#limit} characters long',
		'any.required': 'Password is required',
		'string.empty': 'Password is required'
	})
})

export default function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>({
		resolver: joiResolver(signUpScheme)
	})
	const signUp = useSignUp()
	const data = localStorage.getItem<Auth.SignUpResponse['data']>('data')
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
	const navigate = useNavigate()
	const submitHandler = (data: FormData) => {
		signUp
			.mutateAsync(data)
			.then(d => {
				console.log(d)
			})
			.catch(e => {
				setErrorMessage(e.response.data.message)
				throw e
			})
	}

	useLayoutEffect(() => {
		if (data) {
			navigate('/', {
				replace: true
			})
		}
	}, [data, navigate])

	return (
		<Box
			display='grid'
			sx={{ placeItems: 'center' }}
			height='100vh'>
			<Form
				title='Sign Up'
				onSubmit={handleSubmit(submitHandler)}>
				<Stack
					spacing={4}
					mt={4}>
					{errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
					<Input
						label='Email'
						{...register('email')}
						required
						formControl={{
							required: true,
							error: !!errors.email,
							errorMessage: errors.email?.message
						}}
						placeholder='Enter your email'
					/>
					<Input
						label='Name'
						{...register('name')}
						required
						formControl={{
							required: true,
							error: !!errors.name,
							errorMessage: errors.name?.message
						}}
						placeholder='Enter your name'
					/>
					<Input
						label='Key'
						{...register('key')}
						formControl={{
							required: true,
							error: !!errors.key,
							errorMessage: errors.key?.message
						}}
						placeholder='Enter your key'
					/>
					<Box width='100%'>
						<Button
							fullWidth
							variant='contained'
							type='submit'>
							Sign Up
						</Button>
						<Typography
							variant='body1'
							mt={1}
							textAlign='center'>
							Already signed up? <Link>Go to sign in.</Link>
						</Typography>
					</Box>
				</Stack>
			</Form>
		</Box>
	)
}
