import { Alert, Box, Button, Link, Stack, Typography } from '@mui/material'
import Form from './ui/form'
import Input from './ui/input'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { useState } from 'react'
import { useSignIn } from '@/app/config/query/auth'

interface FormData {
	email: string
	key: string
}

const signInScheme = Joi.object<FormData>({
	// email: Joi.string().email({ tlds: false }).required(),
	email: Joi.string().min(3).required(),
	key: Joi.string().min(4).required().messages({
		'string.min': 'Password must be at least {#limit} characters long',
		'any.required': 'Password is required',
		'string.empty': 'Password is required'
	})
})

export default function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>({
		resolver: joiResolver(signInScheme)
	})
	const [errorMessage] = useState<string | null>(null)
	const signIn = useSignIn()
	const submitHandler = (data: FormData) => {
		signIn.mutate(data)
	}
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
					{JSON.stringify(errors)}
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
							Already signed up? <Link>Go to sign up.</Link>
						</Typography>
					</Box>
				</Stack>
			</Form>
		</Box>
	)
}
