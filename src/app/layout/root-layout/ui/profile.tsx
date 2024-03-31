import { Avatar, IconButton, Menu, MenuItem, MenuList } from '@mui/material'
import { useState } from 'react'

export default function Profile() {
	const [button, setButton] = useState<null | HTMLElement>(null)
	const open = Boolean(button)
	return (
		<>
			<IconButton
				size='small'
				onClick={e => setButton(e.currentTarget)}>
				<Avatar />
			</IconButton>
			<Menu
				open={open}
				onClose={() => setButton(null)}
				anchorEl={button}
				anchorReference='anchorEl'>
				<MenuList sx={{ width: 200 }}>
					<MenuItem>Profile</MenuItem>
					<MenuItem>Logout</MenuItem>
				</MenuList>
			</Menu>
		</>
	)
}
