import React from 'react';
import PropTypes from 'prop-types';

function SodaDetail(props) {
  const { soda } = props;

  return (
    <>
    <h1>Soda Detail placeholder</h1>
    <h3>{soda.name} - {soda.brand}</h3>
    <h3>{soda.price} - {soda.flavor}</h3> 
    </>
  );
}

SodaDetail.propTypes = {
  soda: PropTypes.object
};

export default SodaDetail;