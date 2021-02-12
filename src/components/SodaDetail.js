import React from 'react';
import PropTypes from 'prop-types';

function SodaDetail(props) {
  const { soda, onClickingDelete } = props;

  return (
    <>
    <h1>Soda Detail</h1>
    <h3>{soda.name} - {soda.brand}</h3>
    <h3>{soda.price} - {soda.flavor}</h3> 
    <button onClick={ props.onClickingEdit }>Edit Soda</button>
    <button onClick={()=> onClickingDelete(soda.id) }>Close out of Soda Detail</button>
    </>
  );
}

SodaDetail.propTypes = {
  soda: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default SodaDetail;