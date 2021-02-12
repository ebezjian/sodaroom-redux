import React from 'react';
import Soda from './Soda';
import PropTypes from 'prop-types';

function SodaList(props) {
  return (
    <>
    {props.sodaList.map((soda, index) =>
      <Soda
      name={soda.name}
      brand={soda.brand}
      price={soda.price}
      flavor={soda.flavor}
      key={index} />
      )}
    </>
  );
}

SodaList.propTypes = {
  sodaList: PropTypes.array
};

export default SodaList;