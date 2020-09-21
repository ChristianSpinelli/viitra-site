import React from 'react';
import MainBar from './mainbar';
import SideBar from './sidebar';
import Banner from './banner';



export default function Header(props){
	return(
		<React.Fragment>
			<MainBar/>
			<SideBar tab={props.tab}/>
			<Banner/>
		</React.Fragment>
	);
}