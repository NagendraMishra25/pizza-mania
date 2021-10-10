import React, {useState, useEffect} from 'react'
import { Row, Col, Spinner, Alert } from 'react-bootstrap'
import { Basket } from '../basket/Basket'
import { CustomCard } from '../card/CustomCard'
import { Pizza } from '../../models/pizza.model'
import { CustomModal } from '../modal/CustomModal'

export const Home = () => {

    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);
    const [pizzaList, setPizzaList] = useState<Pizza[]>([]);

    const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null)

    useEffect(() => {
        fetch('/api/pizzas')
        .then(res => res.json())
        .then(result => {
            setIsLoaded(true);
            setPizzaList(result as any);
        }, error => {
            setIsLoaded(true);
            setError(error);
        });
    }, []);

    const handleSelect = (pizza: Pizza) => setSelectedPizza(pizza);

    const handleClose = () => setSelectedPizza(null);

    if(!isLoaded) {
        return (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )
    } else if(error) {
        return (
          <Alert variant="danger">
            <Alert.Heading>Something went wrong!</Alert.Heading>
            <p>
              This information is not available at the moment. Please try later.
            </p>
          </Alert>
        );
    } else {
        return (
          <>
            <Row>
              <Col xs={12} md={4} lg={3} className="order-md-2">
                <Basket />
              </Col>
              <Col xs={12} md={8} lg={9} className="order-md-1">
                <Row xs={1} md={2} xl={3} className="g-4">
                  {pizzaList.map((pizza) => (
                    <Col key={pizza.id}>
                      <CustomCard pizza={pizza} onSelect={handleSelect} />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <CustomModal selectedPizza={selectedPizza} onClose={handleClose} />
          </>
        );
    }
}
