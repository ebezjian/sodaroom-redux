import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';


function SodaDetail(props) {
  
  const { soda, onClickingDelete,} = props;

  return (
    <>
    <h1>Soda Detail</h1>
    <h3>{soda.name} by {soda.brand}</h3>
    <h3>${soda.price} Per Pint </h3>
    <h3>{soda.quantity} Pints</h3>
    <h3>{soda.flavor}</h3> 

    <Button variant="outline-secondary" onClick={()=>props.onBuying(soda.id)}>Buy Soda</Button>
    {soda.quantity <= 10 && <button onClick={()=>props.onRestocking(soda.id, parseInt("#restock").val())}>Restock</button>}    
    <Button variant="outline-secondary" onClick={ props.onClickingEdit }>Edit Soda</Button>
    <Button variant="outline-secondary" onClick={()=> onClickingDelete(soda.id) }>Delete Soda</Button>
    </>
  );
}

SodaDetail.propTypes = {
  soda: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onBuying: PropTypes.func,
  onRestocking: PropTypes.func,
};

export default SodaDetail;