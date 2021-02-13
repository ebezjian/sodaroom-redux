import React from 'react';
import PropTypes from "prop-types";

function Soda(props) {
  return(
    <>
    <div onClick ={() => props.whenSodaClicked(props.id)}>
      <h3>{props.name} by {props.brand}</h3>
      <h4>${props.price} per pint</h4>
      <h4> {props.flavor}</h4>
    </div>
    </>
  );
}

Soda.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenSodaClicked: PropTypes.func,
};

export default Soda;