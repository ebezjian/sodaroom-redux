import React from 'react';
import PropTypes from "prop-types";

function Soda(props) {
  return(
    <h1>
    <h1>Soda placeholders</h1>
    </h1>
  );
}

Soda.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
}

export default Soda;