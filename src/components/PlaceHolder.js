import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardExample() {
  return (
    <div className="d-flex justify-content-around mb-5">
      
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={8} />
          </Placeholder>
          <Placeholder as={Card.Button} animation="glow">
            <Placeholder.Button variant="outline-primary"  xs={4} />
          </Placeholder>
          <Placeholder as={Card.Button} animation="glow">
            <Placeholder.Button variant="outline-danger"  xs={4} />
          </Placeholder>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;