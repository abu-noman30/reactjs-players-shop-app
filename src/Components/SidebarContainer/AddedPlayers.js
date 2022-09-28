import React from 'react';
import './AddedPlayers.css';

const AddedPlayers = (props) => {
	const { cartItem } = props;
	console.log('CartItem:', cartItem);
	return (
		<div className='selected-players-container'>
			<h4>Selected Players</h4>
			<div className='selected-players'>
				<ol>
					{cartItem.map((player) => (
						<li key={player.idPlayer}>{player.strPlayer}</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default AddedPlayers;
