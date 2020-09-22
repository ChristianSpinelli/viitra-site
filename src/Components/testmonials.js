import React from 'react';
import Container from 'react-bootstrap/Container';
import TestmonialsCarousel from '../Components/testmonialsCarousel';


export default function Testmonials(){
	return(
		<React.Fragment>
			<section className='testmonials'>
				<Container>
					<h3>Depoimentos</h3>
					<TestmonialsCarousel/>				
				</Container>
			</section>
		</React.Fragment>
	);
}