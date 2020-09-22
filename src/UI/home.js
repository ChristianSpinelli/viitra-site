import React from 'react';
import Header from '../Components/header';
import ExpertiseArea from '../Components/expertiseArea';
import Partners from '../Components/partners';
import Testmonials from '../Components/testmonials';

export default class Home extends React.Component{
	render(){
		return(
			<React.Fragment>

				<Header tab='/home'/>
				<ExpertiseArea/>
				<Partners/>
				<Testmonials/>
			</React.Fragment>
		);
	}
}