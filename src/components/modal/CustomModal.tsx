import React, {useContext, useState} from 'react'
import {Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';
import './CustomModal.scss';
import { ToppingList, PizzaSizes, Topping } from '../../models/pizza.model';
import HomeContext from '../../context/home-context';

export const CustomModal = (props: any) => {

    const {selectedPizza, onClose} = props;
    const toppingsList: Topping[] = [...ToppingList]; 
    const pizzaSizes = [...PizzaSizes];

    const [toppings, setToppings] = useState<Topping[]>([]);
    const [size, setSize] = useState<string>(pizzaSizes[0]);
    const { addOrder } = useContext(HomeContext);

    const handleAdd = () => {
        const order = {
            ...selectedPizza,
            toppings: [...toppings],
            size,
            orderId: uuidv4(),
            quantity: 1
        };
        addOrder(order);
        onClose();
        resetState();
    }

    const handleCheck = (val: string) => {
        let toppingsArr = [...toppings];
        let index = toppingsArr.findIndex(top => top.name === val);
        if(index !== -1) toppingsArr.splice(index, 1);
        else {
            const topping = ToppingList.find(top => top.name === val);
            topping && toppingsArr.push(topping);
        }
        setToppings(toppingsArr);
    }

    const resetState = () => {
        setSize(pizzaSizes[0]);
        setToppings([]);
    }

    return (
      <Modal show={selectedPizza ? true : false} onHide={onClose} backdrop="static" size="lg" centered>
        <Modal.Body>
          <Container>
            <Form>
              <Row xs={1} sm={2} lg={3}>
                {toppingsList.map((topping, i) => (
                  <Col key={topping.name+i} xs={{ order: 13-i }} lg={{order: i % 3}}>
                    <Form.Check
                      type="checkbox"
                      id={`topping-${i}`}
                      label={topping.name}
                      value={topping.name}
                      onChange={e => handleCheck(e.target.value)}
                    />
                  </Col>
                ))}
              </Row>
              <Row xs={1} className="mt-4">
                {pizzaSizes.map((size, i) => (
                  <Col key={size+i}>
                    <Form.Check
                      type="radio"
                      id={`size-${i}`}
                      name="size"
                      defaultChecked={i===0}
                      value={size}
                      label={size}
                      onChange={e => setSize(e.target.value)}
                    />
                  </Col>
                ))}
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <div className="d-flex justify-content-between p-4">
          <Button variant="secondary" onClick={handleAdd} className="mw-200">
            Add to Basket
          </Button>
          <Button variant="light" onClick={onClose} className="mw-200">
            Cancel
          </Button>
        </div>
      </Modal>
    );
}
