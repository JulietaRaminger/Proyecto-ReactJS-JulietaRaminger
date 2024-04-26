import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Item = ({ product }) => (
  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
    <Card className="item-card">
      <Card.Img className="item-image" variant="top" src={product.pictureUrl} />
      <Card.Body className="item-body">
        <Card.Title className="title">{product.title}</Card.Title>
        <Link to={`/item/${product.id}`}>
          <Button className="custom-button" variant="primary">
            Ver
          </Button>
        </Link>
      </Card.Body>
    </Card>
  </div>
);
