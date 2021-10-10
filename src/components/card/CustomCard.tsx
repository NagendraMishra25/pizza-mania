import React from 'react';
import {Card, Button} from 'react-bootstrap';
import PizzaImg from '../../assets/pizza-img.jpeg';
import { Pizza } from '../../models/pizza.model'

export interface ICardProps {
  pizza: Pizza;
  onSelect: (pizza: Pizza) => void
}

export const CustomCard = (props:ICardProps) => {
  const {name, price} = props.pizza;
    return (
      <Card>
        <Card.Img variant="top" src={PizzaImg} alt="pizza image" />
        <Card.Body>
          <Card.Title>{name} - {price}</Card.Title>
          <div className="d-grid"><Button variant="secondary" size="lg" onClick={() => props.onSelect(props.pizza)}>Choose</Button></div>
        </Card.Body>
      </Card>
    );
}
