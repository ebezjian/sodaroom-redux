import React from 'react';
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function Soda(props, soda) {
  return(
    <>
    <Card style={{ width: "18rem" }}>
    <Card.Body className="test">
    <div onClick ={() => props.whenSodaClicked(props.id)}>
      <h3>{props.name} by {props.brand}</h3>
      <h4>${props.price} per pint</h4>
      <h4> {props.flavor}</h4>
      <h6>{soda.quantity} Pints Left</h6>
    </div>
    </Card.Body>
    </Card>
    </>
  );
}

Soda.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenSodaClicked: PropTypes.func,
};

export default Soda;