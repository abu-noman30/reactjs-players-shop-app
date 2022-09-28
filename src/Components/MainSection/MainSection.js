import React, { useEffect, useState } from 'react';
import AllPlayers from '../AllPlayers/AllPlayers';
import AddedPlayers from '../SidebarContainer/AddedPlayers';
import './MainSection.css';

const MainSection = () => {
	const [players, setPlayers] = useState([]);
	const [searchPlayer, setSearchPlayer] = useState('');
	const [cartItem, setCartItem] = useState([]);

	// console.log(searchPlayer);
	// console.log(players);

	useEffect(() => {
		const fetchPlayers = async () => {
			const res = await fetch(
				`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchPlayer}`
			);
			const data = await res.json();
			setPlayers(data?.player);
		};
		fetchPlayers();
	}, [searchPlayer]);

	return (
		<>
			<div className='main-section'>
				<div className='search-bar-container'>
					<input
						className='search-bar'
						type='text'
						placeholder='Search Player'
						onChange={(e) => setSearchPlayer(e.target.value)}
					/>
					<button className='search-btn'>Search</button>
				</div>
				<div className='players-section'>
					<div className='all-players-container'>
						<AllPlayers
							players={players}
							cartItem={cartItem}
							setCartItem={setCartItem}
						/>
					</div>
					<div className='added-players-container'>
						<AddedPlayers cartItem={cartItem} />
					</div>
				</div>
			</div>
		</>
	);
};

export default MainSection;
