import React from 'react';
import MainBar from './mainbar';
import SideBar from './sidebar';

export default function Header(props){
	return(
		<React.Fragment>
			<MainBar/>
			<SideBar tab={props.tab}/>
		</React.Fragment>
	);
}