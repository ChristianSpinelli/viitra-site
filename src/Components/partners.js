import React from 'react';
import Container from 'react-bootstrap/Container';
import PartnersCarousel from './partnersCarousel';


export default function Partners(){
	return(
		<React.Fragment>
			<section class='partners'>
				<Container>
					<h3>Parceiros e Clientes</h3>
					<PartnersCarousel/>
				</Container>
			</section>
		</React.Fragment>
	);
}


 

  
