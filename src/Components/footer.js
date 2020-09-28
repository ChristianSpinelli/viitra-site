import React from 'react';
import MainFooter from './mainFooter';
import SideFooter from './sideFooter';


export default function Footer(){
	return(
		<React.Fragment>
			<section class='footer'>
				<MainFooter/>
				<SideFooter/>
			</section>
		</React.Fragment>
	);
}