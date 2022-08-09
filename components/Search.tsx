import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export function Search() {
	return (
		<Paper
			component="form"
			sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="渋谷駅"
				inputProps={{ 'aria-label': 'search google maps' }}
			/>
			<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
			<IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}
