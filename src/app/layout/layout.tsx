import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
	return (
		<Box bgcolor='#F8F8F8'>
			<Box
				zIndex={1}
				position='relative'>
				{children}
			</Box>
			<Box
				width='50%'
				height='100%'
				position='fixed'
				overflow='hidden'
				zIndex={0}
				sx={{ inset: 0 }}>
				<svg
					width='100%'
					height='100%'
					viewBox='0 0 1115 1024'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					preserveAspectRatio='xMaxYMax slice'>
					<path
						d='M0 0H1072.5L1103.2 37.9667C1118.42 56.7948 1117.96 83.8246 1102.12 102.13L304 1024H0V0Z'
						fill='#333333'
					/>
				</svg>
			</Box>
		</Box>
	)
}
