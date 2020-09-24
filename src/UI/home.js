import React from 'react';
import Header from '../Components/header';
import ExpertiseArea from '../Components/expertiseArea';
import Partners from '../Components/partners';
import Testmonials from '../Components/testmonials';
import Contact from '../Components/contact';
import ContentBanner from '../Components/contentBanner';

export default class Home extends React.Component{
	render(){
		return(
			<React.Fragment>

				<Header tab='/home'/>
				<ExpertiseArea/>
				<ContentBanner title='Potencialize seu negócio!'/>
				<Partners/>
				<Testmonials/>
				<Contact/>
			</React.Fragment>
		);
	}
}