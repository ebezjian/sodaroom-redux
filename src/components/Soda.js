import React from 'react';
import PropTypes from "prop-types";

function Soda(props) {
  return(
    <>
    <div onClick ={() => props.whenSodaClicked(props.id)}>
      <h3>{props.name} - {props.brand}</h3>
      <h4>{props.price} - {props.flavor}</h4>
    </div>
    </>
  );
}

Soda.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string,
  id: PropTypes.string,
  whenSodaClicked: PropTypes.func,
};

export default Soda;