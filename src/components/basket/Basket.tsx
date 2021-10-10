import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import HomeContext from "../../context/home-context";
import { Order } from "../../models/pizza.model";
import "./Basket.scss";

export const Basket = () => {
  const { orderList, deleteOrder, checkout } = useContext(HomeContext);

  const handleCheckout = () => {};

  const handleDelete = (orderId: string) => deleteOrder(orderId);

  const hasOrder = orderList && orderList.length > 0;

  return (
    <>
      <div className="basket-container p-3">
        {!hasOrder && (
          <>
            <div className="pt-4 pb-1 text-center">No items in your basket</div>
          </>
        )}
        {hasOrder && (
          <>
            {orderList.map((order: Order) => (
              <Row role="order-item" key={order.orderId}>
                <Col xs={8} className="d-flex justify-content-between">
                  <div className="pr-2">
                    <CloseButton
                      className="white"
                      onClick={() => handleDelete(order.orderId)}
                    />
                  </div>
                  <div className="text-end">
                    <div>
                      {order.quantity} x {order.name}
                    </div>
                    <div>
                      {order.size}{order.toppings.length > 0 ? ", " : ""}
                      {order.toppings.map((top) => top.name).join(",")}
                    </div>
                  </div>
                </Col>
                <Col xs={4} className="text-end">
                  {order.currency} {order.price}
                </Col>
              </Row>
            ))}
          </>
        )}
        <div className="dot-sep" />
        <Row className="mb-4 text-end">
          <Col xs={8}>Total</Col>
          <Col xs={4}>
            {hasOrder ? orderList[0].currency : '$'}{" "}
            {orderList && orderList.reduce((total: number, order: Order) => (total += order.price),0)}
          </Col>
        </Row>
        <div className="d-grid">
          <Button
            variant="secondary"
            size="lg"
            onClick={handleCheckout}
            disabled={!hasOrder}
          >
            Checkout
          </Button>
        </div>
      </div>
      <div className="d-grid">
        <Button variant="link" disabled={!hasOrder}>
          Empty Basket
        </Button>
      </div>
    </>
  );
};
