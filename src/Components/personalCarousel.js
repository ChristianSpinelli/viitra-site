import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PersonalCarousel(){
	 const [index, setIndex] = useState(0);
	 const handleSelect = (selectedIndex, e) => {
    	setIndex(selectedIndex);
  	};
	return(
		<React.Fragment>
			<Carousel pause='hover' activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item>
							<Row>	
								<Col>
									<Card className='partner-card'>
										<Card.Img src='ufpe.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='cin.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='sebrae.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='pesqueira.png'/>
									</Card>
								</Col>
							</Row>
							<Row>	
								<Col>
									<Card className='partner-card'>
										<Card.Img src='samsung.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='aneel.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='isiti.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='fade.png'/>
									</Card>
								</Col>
							</Row>
							<Row>	
								<Col>
									<Card className='partner-card'>
										<Card.Img src='facepe.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='mundoeducacional.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='midia-express.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='movimenta.png'/>
									</Card>
								</Col>
							</Row>
				</Carousel.Item>
				<Carousel.Item>
							<Row>	
								<Col>
									<Card className='partner-card'>
										<Card.Img src='portfolio.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='prefacio.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='emitter.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='positiva.png'/>
									</Card>
								</Col>
							</Row>
							<Row>	
								<Col>
									<Card className='partner-card'>
										<Card.Img src='elcoma.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='informe.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='i9up.png'/>
									</Card>
								</Col>
								<Col>
									<Card className='partner-card'>
										<Card.Img src='nutes.png'/>
									</Card>
								</Col>
							</Row>
				</Carousel.Item>
			</Carousel>
		</React.Fragment>
	);
}