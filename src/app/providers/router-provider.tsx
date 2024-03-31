import { RouterProvider as Provider } from 'react-router-dom'
import { router } from '../config/router'

export default function RouterProvider() {
	return <Provider router={router} />
}
