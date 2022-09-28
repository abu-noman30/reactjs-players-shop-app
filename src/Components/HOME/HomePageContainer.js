import React from 'react';

import MainSection from '../MainSection/MainSection';
import Navbar from '../Navbar/Navbar';

const HomePageContainer = () => {
	return (
		<>
			<div className='home-page-container'>
				<Navbar />
				<MainSection />
			</div>
		</>
	);
};

export default HomePageContainer;
