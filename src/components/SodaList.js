import React from 'react';
import Soda from './Soda';
import PropTypes from 'prop-types';

function SodaList(props) {
  return (
    <>
    {Object.values(props.sodaList).map((soda) =>
      <Soda
      whenSodaClicked = {props.onSodaSelection}
      name={soda.name}
      brand={soda.brand}
      price={soda.price}
      flavor={soda.flavor}
      quantity={soda.quantity}
      id={soda.id} />
      )}
    </>
  );
}

SodaList.propTypes = {
  sodaList: PropTypes.object,
  onSodaSelection: PropTypes.func,
};

export default SodaList;