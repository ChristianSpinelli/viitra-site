import React from 'react';
import Header from '../Components/header';

export default class Home extends React.Component{
	render(){
		return(
			<React.Fragment>
				<Header tab='#home'/>
			</React.Fragment>
		);
	}
}