import React from 'react';
import './Player.css';

const Player = (props) => {
	const { idPlayer, strPlayer, strNationality, strDescriptionEN, strThumb } =
		props.singlPlayer;
	// console.log(singlPlayer);
	const { cartItem, setCartItem } = props;

	const handlerOnAddToCart = () => {
		let playerInfo = {
			idPlayer: idPlayer,
			strPlayer: strPlayer,
			strNationality: strNationality
		};
		if (cartItem) {
			const newCartItem = [...cartItem, playerInfo];
			setCartItem(newCartItem);
			// console.log(newCartItem);
		}
	};
	return (
		<>
			<div className='players-card'>
				<img
					src={strThumb ? strThumb : '/logo192.png'}
					alt=''
					className='player-img'
				/>
				<h6>ID: {idPlayer} </h6>
				<h4>Name: {strPlayer}</h4>
				<p>Nationality: {strNationality}</p>
				<p>
					Description:
					{strDescriptionEN
						? strDescriptionEN.slice(0, 50) + '...'
						: 'No-Description'}
				</p>
				<div className='btn-container'>
					<button>Details</button>
					<button onClick={() => handlerOnAddToCart()}>Add To Cart</button>
					<button>Bookmark</button>
				</div>
			</div>
		</>
	);
};

export default Player;
