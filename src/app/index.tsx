import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RootProvider from './providers/root-provider'
import './index.css'
const rootContainer = document.getElementById('root') as HTMLDivElement
const root = createRoot(rootContainer)

const app = (
	<StrictMode>
		<RootProvider />
	</StrictMode>
)

root.render(app)
