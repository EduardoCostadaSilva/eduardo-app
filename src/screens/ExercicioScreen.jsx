import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ExercicioScreen() {
    return (
        <Container>
            <h1>Usei a <a href="https://react-bootstrap.netlify.app/docs/components/cards">Cards</a></h1>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/400/400" />
                <Card.Body>
                    <Card.Title>Imagens aleatórias</Card.Title>
                    <Card.Text>
                        Imagem aleatória.
                    </Card.Text>
                    <Button variant="primary" href="https://www.pensador.com/frase/NzU1OTQ5/#:~:text=Rocky%20Balboa-,O%20mundo%20n%C3%A3o%20%C3%A9%20um%20mar%20de%20rosas%253B%20%C3%A9%20um,se%20trata%20de%20bater%20forte.">click se tiver coragem.</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ExercicioScreen;