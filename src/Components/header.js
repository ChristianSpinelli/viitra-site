import React from 'react';
import MainBar from './mainbar';
import SideBar from './sidebar';
import MainBanner from './mainBanner';



export default function Header(props){
	return(
		<React.Fragment>
			<section class='header'>
				<MainBar/>
				<SideBar tab={props.tab}/>
				<MainBanner/>
			</section>
		</React.Fragment>
	);
}