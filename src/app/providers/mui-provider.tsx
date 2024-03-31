import { PropsWithChildren } from 'react'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '../config/theme'
import Layout from '../layout/layout'

export default function MuiProvider({ children }: PropsWithChildren) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Layout>{children}</Layout>
		</ThemeProvider>
	)
}
