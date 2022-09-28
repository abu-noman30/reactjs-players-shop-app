import React from 'react';
import Player from '../SinglePlayer/Player';
import './AllPlayers.css';

const AllPlayers = (props) => {
	const { players, cartItem, setCartItem } = props;
	return (
		<>
			<div className='players-container'>
				{players.map((singlPlayer) => (
					<Player
						key={singlPlayer.idPlayer}
						singlPlayer={singlPlayer}
						cartItem={cartItem}
						setCartItem={setCartItem}
					/>
				))}
			</div>
		</>
	);
};

export default AllPlayers;
